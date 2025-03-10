var camera, scene, renderer, controls, cube;

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

				controls = new THREE.DeviceOrientationControls( cube );

				scene = new THREE.Scene();
				/*
				var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
				// invert the geometry on the x-axis so that all of the faces point inward
				geometry.scale( - 1, 1, 1 );

				var material = new THREE.MeshBasicMaterial( {
					map: new THREE.TextureLoader().load( 'imgs/blackforest.png' )
				} );

				var mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );
				*/
				var cubeGeometry = new THREE.BoxGeometry( 4, 4, 4);
				var cubeMaterial = new THREE.MeshNormalMaterial();
				var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
				scene.add( cube ); 

				var helperGeometry = new THREE.BoxBufferGeometry( 100, 100, 100, 10, 10, 10 );
				var helperMaterial = new THREE.MeshBasicMaterial( { color: 0xfff000, wireframe: true } );
				var helper = new THREE.Mesh( helperGeometry, helperMaterial );
				scene.add( helper );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				//

				window.addEventListener( 'resize', onWindowResize, false );


			}

			function animate() {

				window.requestAnimationFrame( animate );

				//cube.rotation.x += 0.01;
				//cube.rotation.y += 0.02;

				controls.update();
				renderer.render( scene, camera );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}