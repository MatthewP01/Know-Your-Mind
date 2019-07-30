function main() {
  
  // Three.js tutorials used

  // Render the data to the canvas
  const canvas = document.querySelector('#c');

  const annotation = document.querySelector('.annotation')

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true
  });
  renderer.setClearColor( 0xffffff, 0);

  // Create a scene to add 3D model to
  const scene = new THREE.Scene();

  // Create camera and scene view
  let fieldOfView = 55
  let aspect = window.innerWidth / window.innerHeight
  const camera = new THREE.PerspectiveCamera( fieldOfView, aspect, 1, 2000 );
	camera.position.set(0.5, 0.9, 2.7);

  // Load in the GLTF brain model
  const gltfLoader = new THREE.GLTFLoader();

  gltfLoader.load('../assets/brain_project/scene.gltf', (gltf) => {
    const loadedBrain = gltf.scene;

    // Add model to scene
    scene.add(loadedBrain)
  })

  // Adding a while shine/shadow to brain
  {
    const color = 0xFFFFFF;
    const intensity = 1.3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  // Resize the canvas to fit page if it needs to be resized
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {


    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    // Add scene and camera to canvas
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  // Orbit controls to rotate brain
  const controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, - 0.2, - 0.2 );
	controls.update();
  controls.enableZoom = false;

  function animate() {
    requestAnimationFrame( animate );

    controls.update();

	  renderer.render( scene, camera );
  }
}

main();
