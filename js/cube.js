var camera, scene, renderer, controls;
var geometry, material, mesh, light, divWidth, divheight;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.set( 0, 200, 1000 );

	//camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	//camera.position.z = 1;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xffffff );
	//scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

	light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	light.position.set( 0, 200, 0 );
	scene.add( light );

	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 0, 200, 100 );
	light.castShadow = true;
	light.shadow.camera.top = 180;
	light.shadow.camera.bottom = - 100;
	light.shadow.camera.left = - 120;
	light.shadow.camera.right = 120;
	scene.add( light );

	var geometry = new THREE.BoxGeometry( 50, 50, 50 );
	var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.y = 3;
	//scene.add( cube );

	var loader = new THREE.FBXLoader();
	loader.load( 'js/models/immigrant_06-portrait-threejs.fbx', function ( object ) {

		scene.add( object );
		object.rotation.y = 60;
		
	} );

	var divWidth = document.getElementById('render').width;
	var divheight = document.getElementById('render').height;

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	document.getElementById('render').appendChild( renderer.domElement );
	
	controls = new THREE.DeviceOrientationControls(scene, true);

}

function animate() {

	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );

}