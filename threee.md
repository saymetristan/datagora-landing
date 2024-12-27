Installation
Project structure
Every three.js project needs at least one HTML file to define the webpage, and a JavaScript file to run your three.js code. The structure and naming choices below aren't required, but will be used throughout this guide for consistency.

index.html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
		<script type="module" src="/main.js"></script>
	</body>
</html>
main.js
import * as THREE from 'three';

...
public/
The public/ folder is sometimes also called a "static" folder, because the files it contains are pushed to the website unchanged. Usually textures, audio, and 3D models will go here.
Now that we've set up the basic project structure, we need a way to run the project locally and access it through a web browser. Installation and local development can be accomplished with npm and a build tool, or by importing three.js from a CDN. Both options are explained in the sections below.

Option 1: Install with NPM and a build tool
Development
Installing from the npm package registry and using a build tool is the recommended approach for most users — the more dependencies your project needs, the more likely you are to run into problems that the static hosting cannot easily resolve. With a build tool, importing local JavaScript files and npm packages should work out of the box, without import maps.

Install Node.js. We'll need it to load manage dependencies and to run our build tool.
Install three.js and a build tool, Vite, using a terminal in your project folder. Vite will be used during development, but it isn't part of the final webpage. If you prefer to use another build tool, that's fine — we support modern build tools that can import ES Modules.

# three.js
npm install --save three

# vite
npm install --save-dev vite
Installation added node_modules/ and package.json to my project. What are they?
From your terminal, run:
npx vite
What is npx?
If everything went well, you'll see a URL like http://localhost:5173 appear in your terminal, and can open that URL to see your web application.
The page will be blank — you're ready to create a scene.

If you want to learn more about these tools before you continue, see:

three.js journey: Local Server
Vite: Command Line Interface
MDN: Package management basics
Production
Later, when you're ready to deploy your web application, you'll just need to tell Vite to run a production build — npx vite build. Everything used by the application will be compiled, optimized, and copied into the dist/ folder. The contents of that folder are ready to be hosted on your website.

Option 2: Import from a CDN
Development
Installing without build tools will require some changes to the project structure given above.

We imported code from 'three' (an npm package) in main.js, and web browsers don't know what that means. In index.html we'll need to add an import map defining where to get the package. Put the code below inside the <head></head> tag, after the styles.

<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@<version>/examples/jsm/"
    }
  }
</script>
Don't forget to replace <version> with an actual version of three.js, like "v0.149.0". The most recent version can be found on the npm version list.

We'll also need to run a local server to host these files at URL where the web browser can access them. While it's technically possible to double-click an HTML file and open it in your browser, important features that we'll later implement, do not work when the page is opened this way, for security reasons.

Install Node.js, then run serve to start a local server in the project's directory:

npx serve .
If everything went well, you'll see a URL like http://localhost:3000 appear in your terminal, and can open that URL to see your web application.
The page will be blank — you're ready to create a scene.

Many other local static servers are available — some use different languages instead of Node.js, and others are desktop applications. They all work basically the same way, and we've provided a few alternatives below.

More local servers
Production
When you're ready to deploy your web application, push the source files to your web hosting provider — no need to build or compile anything. The downside of that tradeoff is that you'll need to be careful to keep the import map updated with any dependencies (and dependencies of dependencies!) that your application requires. If the CDN hosting your dependencies goes down temporarily, your website will stop working too.

IMPORTANT: Import all dependencies from the same version of three.js, and from the same CDN. Mixing files from different sources may cause duplicate code to be included, or even break the application in unexpected ways.

Addons
Out of the box, three.js includes the fundamentals of a 3D engine. Other three.js components — such as controls, loaders, and post-processing effects — are part of the addons/ directory. Addons do not need to be installed separately, but do need to be imported separately.

The example below shows how to import three.js with the OrbitControls and GLTFLoader addons. Where necessary, this will also be mentioned in each addon's documentation or examples.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
Some excellent third-party projects are available for three.js, too. These need to be installed separately — see Libraries and Plugins.

AmbientLight
This light globally illuminates all objects in the scene equally.

This light cannot be used to cast shadows as it does not have a direction.

Code Example
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
Constructor
AmbientLight( color : Integer, intensity : Float )
color - (optional) Numeric value of the RGB component of the color. Default is 0xffffff.
intensity - (optional) Numeric value of the light's strength/intensity. Default is 1.

Creates a new AmbientLight.

Properties
See the base Light class for common properties.

.isAmbientLight : Boolean
Read-only flag to check if a given object is of type AmbientLight.

Methods
See the base Light class for common methods.

Source
src/lights/AmbientLight.js

PointLight
A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.

This light can cast shadows - see PointLightShadow page for details.

Code Example
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );
Examples
lights / pointlights
effects / anaglyph
geometry / text
lensflares

Constructor
PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
color - (optional) hexadecimal color of the light. Default is 0xffffff (white).
intensity - (optional) numeric value of the light's strength/intensity. Default is 1.
distance - Maximum range of the light. Default is 0 (no limit).
decay - The amount the light dims along the distance of the light. Default is 2.

Creates a new PointLight.

Properties
See the base Light class for common properties.

.castShadow : Boolean
If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right. See the PointLightShadow for details. The default is false.

.decay : Float
The amount the light dims along the distance of the light. Default is 2.
In context of physically-correct rendering the default value should not be changed.

.distance : Float
When distance is zero, light will attenuate according to inverse-square law to infinite distance. When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff, where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.

Default is 0.0.

.intensity : Float
The light's luminous intensity measured in candela (cd). Default is 1.

Changing the intensity will also change the light's power.

.power : Float
The light's power.
Power is the luminous power of the light measured in lumens (lm).

Changing the power will also change the light's intensity.

.shadow : PointLightShadow
A PointLightShadow used to calculate shadows for this light.

The lightShadow's camera is set to a PerspectiveCamera with fov of 90, aspect of 1, near clipping plane at 0.5 and far clipping plane at 500.

Methods
See the base Light class for common methods.

.dispose () : undefined
Frees the GPU-related resources allocated by this instance. Call this method whenever this instance is no longer used in your app.

.copy ( source : PointLight ) : this
Copies value of all the properties from the source to this PointLight.

Source
src/lights/PointLight.js