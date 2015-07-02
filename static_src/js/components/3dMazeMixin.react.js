var React = require('react');
var assign = require('object-assign');

var MazeRender = React.createClass({
    UNIT_LENGTH: 30,
    WALL_DEPTH: 4,
    MARKER_CEIL: 25,
    MARKER_FLR: 21,
    MARKER_ANIMATE_UP: true,
    componentDidMount: function () {
    },
    createScene: function () {
        var scene = new THREE.Scene();
        var targetEl = this.refs.mazeTarget;

        var unitLength = this.UNIT_LENGTH;

        var width = 600;
        var height = 600;

        var camera = new THREE.PerspectiveCamera(130, width/ height, 0.1, 1500 );
        var pointLight =
              new THREE.SpotLight(0xFFFFFF);

        var topPointLight =
              new THREE.PointLight(0xFFFFFF);

        // set its position
         topPointLight.position.x = width;
         topPointLight.position.y = 500;
         topPointLight.position.z = 130;
         topPointLight.rotation.x = Math.PI/2;

        // set its position
         pointLight.position.x = width;
         pointLight.position.y = 500;
         pointLight.position.z = 130;
         pointLight.castShadow = true;
        //
        // // add to the scene
         scene.add(pointLight);

        var axes = new THREE.AxisHelper(50);
        scene.add(axes);

        var size = 2000;
        var step = this.UNIT_LENGTH;

        var gridHelper = new THREE.GridHelper( size, step );        
        gridHelper.rotation.x = Math.PI/2;

        scene.add( gridHelper );

        this.addWalls(scene);
        this.addBorder(scene, width, height);
        this.addGridLines(scene);
        this.marker = this.createMarker([this.props.app.position.x, this.props.app.position.y])
        scene.add(this.marker);

        camera.position.z = 100;
        camera.position.x = 150;
        camera.position.y = 150;
        //camera.lookAt( new THREE.Vector3(width, height, 1));

        var renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( height, width );
        renderer.setClearColor( 0x555555 );

        //replace or append the rendered scene
        var sceneNodeParent = React.findDOMNode(targetEl);
        var sceneNode = sceneNodeParent.firstChild;
        if (this.props.app.newLevel) {
            if (sceneNode) sceneNodeParent.removeChild(sceneNode);  
        }
        sceneNodeParent.appendChild( renderer.domElement );

        this.renderScene  = this.getRenderer(renderer, scene, camera);
        this.renderScene();
    },
    render: function () {
        return (
                <div ref="mazeTarget" className="maze-target"></div>);
    },
    updateMarker: function () {
        assign({}, this.marker, this.props.app.position);
    },
    componentDidUpdate: function () {
        if (this.props.app.newLevel) {
            this.createScene();
        } else {
            this.updateMarker();
        }
        this.renderScene();
    },
    getRenderer: function (renderer, scene, camera) {
        var bm  = this.bounceMarker;
        function render() {
                requestAnimationFrame( render );
                bm();
                    renderer.render( scene, camera );
        }

        return render;
    },
    createWall: function (x, y, coords, color) {
        var color = color || 0x0080ab;
        var geometry = new THREE.BoxGeometry( x, y, 10 );
        var material = new THREE.MeshPhongMaterial( { color: color } );

        material.opacity = 0.8;
        material.transparent = true;

        var cube = new THREE.Mesh( geometry, material );
        cube.castShadow = true;

        cube.position.set(coords[0], coords[1], 20);

        return cube;

    },
    createMarker: function (coords) {
        var ul = this.UNIT_LENGTH;
        var ceil = 35;
        var flr = 20;
        var sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
        var sphereMaterial = new THREE.MeshPhongMaterial( {color: 0xffff00 } );
        this.marker = new THREE.Mesh( sphereGeometry, sphereMaterial );
        this.marker.position.x = coords[0] + ul/2;
        this.marker.position.y = coords[1] + ul/2;
        this.marker.castShadow = true;

        this.marker.position.z = this.MARKER_FLR;

        return this.marker;

    },
    createOpenFloor: function (coords) {
        var ul = this.UNIT_LENGTH;
        var geometry = new THREE.CircleGeometry( 7, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0x000000 } );
        var circle = new THREE.Mesh( geometry, material );
        circle.position.x = coords[0] - ul * .15;
        circle.position.y = coords[1] + ul * .15;
        circle.castShadow = true;

        circle.position.z = this.MARKER_FLR;

        return circle;
    },
    createOpenFloor: function (coords) {
        var ul = this.UNIT_LENGTH;
        var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.x = coords[0] + ul * .15;
        cylinder.position.y = coords[1] - ul * .15;
        cylinder.castShadow = true;

        cylinder.position.z = this.MARKER_FLR;
        scene.add( cylinder );

        return circle;
    },
    bounceMarker: function () {
        var flr = this.MARKER_FLR;
        var ceil = this.MARKER_CEIL;
        var marker = this.marker;
        var posZ = marker.position.z;
        var z = 0.3;
        var animateUp = this.MARKER_ANIMATE_UP;
        if (animateUp && posZ > ceil) {
            this.MARKER_ANIMATE_UP = false;
            z = -0.1;
        } else if (!animateUp && posZ < flr) {
            this.MARKER_ANIMATE_UP = true;
            z = 0.1;
        } else if (!animateUp) {
            z = -0.1;
        }
        marker.translateZ(z);
    },
    addBorder: function (scene, width, height){
        var config = this.props.app.config;
        var ul = this.UNIT_LENGTH;
        var planeGeometry = new THREE.BoxGeometry( ul * config.x, ul * config.y, 20);
        var planeMaterial = new THREE.MeshBasicMaterial({color:0xcccccc});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.x = ul * config.x /2;
        plane.position.y = ul * config.y /2;
        plane.position.z = 10;
        scene.add(plane);

        var lineMaterial = new THREE.LineBasicMaterial({
                color: 0x0000ff,
                linewidth: 5
        });

        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(
                    new THREE.Vector3( 0, 0, 20 ),
                        new THREE.Vector3( 0, ul*config.y, 20 ),
                        new THREE.Vector3( ul*config.x, ul*config.y, 20 ),
                        new THREE.Vector3( ul*config.x, 0, 20 ),
                        new THREE.Vector3( 0, 0, 20 )
                );

        var line = new THREE.Line( lineGeometry, lineMaterial );
        scene.add( line );
    },
    addGridLines: function (scene) {
        var config = this.props.app.config;
        var ul = this.UNIT_LENGTH;
        var i;

        //vertical grid lines
        for (i = 1;i<config.x;i++) {
            var xCoord = i * ul;
            var yLimit = ul * config.y; 
            this.addGridLine(scene, [xCoord, 0], [xCoord, yLimit]); 
        }
        //horizontal grid lines
        for (i = 1;i<config.y;i++) {
            var yCoord = i * ul;
            var xLimit = ul * config.x;
            this.addGridLine(scene, [0, yCoord], [xLimit, yCoord]); 
        }
    },
    addGridLine: function (scene, start, end) {
        var lineMaterial = new THREE.LineBasicMaterial({
                color: 0x00ffff,
                linewidth: 2
        });

        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(
                    new THREE.Vector3( start[0], start[1], 20 ),
                        new THREE.Vector3( end[0], end[1], 20 )
                );

        var line = new THREE.Line( lineGeometry, lineMaterial );
        scene.add( line );
    },
    addVerticalWall: function (scene, wall) {
        var ul = this.UNIT_LENGTH;
        var wd = this.WALL_DEPTH;
        if (wall.exists) {
            scene.add(this.createWall(wd, ul, [ul * wall.x + ul, ul * wall.y + (ul/2)]));
        }
    },
    addHorizontalWall: function (scene, wall) {
        var ul = this.UNIT_LENGTH;
        var wd = this.WALL_DEPTH;
        if (wall.exists) {
            scene.add(this.createWall(ul, wd, [ul * wall.x + (ul/2), ul * wall.y + ul]));
        }
    },
    addCeilingWall: function (scene, wall) {
        var ul = this.UNIT_LENGTH;
        var wd = this.WALL_DEPTH;
        if (!wall.exists) {
            scene.add(this.createOpenCeiling([ul * wall.x + (ul/2), ul * wall.y + (ul/2)]));
        }
    },
    addFloorWall: function (scene, wall) {
        var ul = this.UNIT_LENGTH;
        var wd = this.WALL_DEPTH;
        if (!wall.exists) {
            scene.add(this.createOpenFloor([ul * wall.x + (ul/2), ul * wall.y + (ul/2)]));
        }
    },
    addWalls: function (scene) {
        //walls is an array x,y,z]
        console.log(this.props.app);
        var walls = this.props.app.walls;
        _.flatten(walls[1], true).forEach(this.addHorizontalWall.bind(this, scene));
        _.flatten(walls[0], true).forEach(this.addVerticalWall.bind(this, scene));
        _.flatten(walls[2], true).forEach(this.addFloorWall.bind(this, scene));
        _.flatten(walls[3], true).forEach(this.addCeilingWall.bind(this, scene));
    }
});

module.exports = MazeRender;
