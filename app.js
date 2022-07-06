const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

//geometry
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const geometrySphere = new THREE.SphereGeometry(1, 64, 32);
const geometryTorus = new THREE.TorusGeometry(1, 0.33, 30, 100);

//materials
const materialLambBlue = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const materialLambGreen = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const materialLambRed = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const materialBasic = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

//shape creation
let cube = new THREE.Mesh(geometryCube, materialLambRed);
let sphere = new THREE.Mesh(geometrySphere, materialLambGreen);
let torus = new THREE.Mesh(geometryTorus, materialLambBlue);

//Light
var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(25, 5, 25);

//scene
scene.add(light);
scene.add(cube);
scene.add(sphere);
scene.add(torus);

//object location
cube.position.x = -5;
torus.position.x = 5;

camera.position.z = 6;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}

function fastCube() {
  requestAnimationFrame(fastCube);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
}
function slowCube() {
  requestAnimationFrame(slowCube);
  cube.rotation.x -= 0.01;
  cube.rotation.y -= 0.01;
  cube.rotation.z -= 0.01;
}
function upBall() {
  requestAnimationFrame(upBall);
  sphere.position.y += 0.0025;
}
function downBall() {
  requestAnimationFrame(downBall);
  sphere.position.y -= 0.0025;
}
function fastRing() {
  requestAnimationFrame(fastRing);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;
}
function slowRing() {
  requestAnimationFrame(slowRing);
  torus.rotation.x -= 0.01;
  torus.rotation.y -= 0.01;
  torus.rotation.z -= 0.01;
}

//dynamically changes canvas size
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

//start object animations on mouse click

//html work
let fastSquare = document.createElement("button");
fastSquare.innerText = "+Square";
let slowSquare = document.createElement("button");
slowSquare.innerText = "-Square";
let upSphere = document.createElement("button");
upSphere.innerText = "Up Sphere";
let downSphere = document.createElement("button");
downSphere.innerText = "Down Sphere";
let fastTarus = document.createElement("button");
fastTarus.innerText = "+Ring";
let slowTarus = document.createElement("button");
slowTarus.innerText = "-Ring";
let resetBtn = document.createElement("button");
resetBtn.innerText = "Reset Sphere";

let body = document.body;

body.append(slowSquare);
body.append(fastSquare);
body.append(upSphere);
body.append(downSphere);
body.append(slowTarus);
body.append(fastTarus);
body.append(resetBtn);
body.appendChild(renderer.domElement);

//event listeners for cube
fastSquare.addEventListener("click", () => {
  fastCube();
});
slowSquare.addEventListener("click", () => {
  slowCube();
});

//event listeners for sphere
upSphere.addEventListener("click", () => {
  upBall();
});
downSphere.addEventListener("click", () => {
  downBall();
});

//event listeners for tarus
fastTarus.addEventListener("click", () => {
  fastRing();
});
slowTarus.addEventListener("click", () => {
  slowRing();
});

//reset btn
resetBtn.addEventListener("click", () => {
  sphere.position.y = 0;
});

animate();
