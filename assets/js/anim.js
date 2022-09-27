import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/DRACOLoader.js";
import { EffectComposer } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/ShaderPass.js";
import { BleachBypassShader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/shaders/BleachBypassShader.js";
import { ColorCorrectionShader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/shaders/ColorCorrectionShader.js";
import { FXAAShader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/shaders/FXAAShader.js";
import { GammaCorrectionShader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/shaders/GammaCorrectionShader.js";

const container = document.getElementById("model-3d");

let camera, scene, renderer, mesh, controls, model, dracoLoader;

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = container.offsetWidth / 2;
const windowHalfY = container.offsetHeight / 3;

let composer, effectFXAA;

if (detectDesktop()) {
  init();
  animate();
}

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    container.offsetWidth / container.offsetHeight,
    1,
    1000
  );
  camera.position.set(0, 1.5, 25);

  scene = new THREE.Scene();
  const directionalLight = new THREE.DirectionalLight(0xffffff, 20); // Soft white light
  directionalLight.position.set(16, 16, 0);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
  scene.add(ambientLight);

  const loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out");

    // optional: remove loader from DOM via event listener
    loadingScreen.addEventListener("transitionend", onTransitionEnd);
  });

  dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("assets/draco-loader/");
  dracoLoader.preload();

  const loader = new GLTFLoader(loadingManager);
  loader.setDRACOLoader(dracoLoader);
  loader.load(
    "https://nhantrandev96.github.io/assets/models/mini_robot.glb",
    function (gltf) {
      model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());

      model.position.x += model.position.x - center.x;
      model.position.y += model.position.y - center.y;
      model.position.z += model.position.z - center.z;

      scene.add(model);
    }
  );

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setPixelRatio(container.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // Composer
  renderer.autoClear = false;
  const renderModel = new RenderPass(scene, camera);
  const effectBleach = new ShaderPass(BleachBypassShader);
  const effectColor = new ShaderPass(ColorCorrectionShader);
  effectFXAA = new ShaderPass(FXAAShader);
  const gammaCorrection = new ShaderPass(GammaCorrectionShader);
  effectFXAA.uniforms["resolution"].value.set(
    1 / container.offsetWidth,
    1 / container.offsetHeight
  );
  effectBleach.uniforms["opacity"].value = 0.2;
  effectColor.uniforms["powRGB"].value.set(1.4, 1.45, 1.45);
  effectColor.uniforms["mulRGB"].value.set(1.1, 1.1, 1.1);

  composer = new EffectComposer(renderer);
  composer.addPass(renderModel);
  // composer.addPass(effectFXAA);
  // composer.addPass(effectBleach);
  // composer.addPass(effectColor);
  // composer.addPass(gammaCorrection);

  document.addEventListener("mousemove", onDocumentMouseMove);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  composer.setSize(width, height);

  effectFXAA.uniforms["resolution"].value.set(1 / width, 1 / height);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  targetX = mouseX * 0.0005;
  targetY = mouseY * 0.0005;
  if (model) {
    model.rotation.y += 0.01 * (targetX - model.rotation.y);
    model.rotation.x += 0.01 * (targetY - model.rotation.x);
  }
  composer.render();
}

function detectDesktop() {
  var windowWidth =
    window.screen.width < window.outerWidth
      ? window.screen.width
      : window.outerWidth;

  return windowWidth > 992;
}
