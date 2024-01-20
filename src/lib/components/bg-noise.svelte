<svg
	xmlns="http://www.w3.org/2000/svg"
	version="1.1"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 700 700"
	width="700"
	height="700"
	><defs
		><radialGradient id="gggrain-gradient" r="0.5">
			<stop offset="0%" stop-color="hsl(21, 90%, 48%)"></stop>
			<stop offset="50%" stop-color="hsl(26, 76%, 18%)"></stop>
			<stop offset="100%" stop-color="hsla(20, 14%, 4%, 1.00)"></stop>
		</radialGradient><filter
			id="gggrain-filter"
			x="-20%"
			y="-20%"
			width="140%"
			height="140%"
			filterUnits="objectBoundingBox"
			primitiveUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.64"
				numOctaves="2"
				seed="2"
				stitchTiles="stitch"
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				result="turbulence"
			></feTurbulence>
			<feColorMatrix
				type="saturate"
				values="0"
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				in="turbulence"
				result="colormatrix"
			></feColorMatrix>
			<feComponentTransfer
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				in="colormatrix"
				result="componentTransfer"
			>
				<feFuncR type="linear" slope="3"></feFuncR>
				<feFuncG type="linear" slope="3"></feFuncG>
				<feFuncB type="linear" slope="3"></feFuncB>
			</feComponentTransfer>
			<feColorMatrix
				x="0%"
				y="0%"
				width="100%"
				height="100%"
				in="componentTransfer"
				result="colormatrix2"
				type="matrix"
				values="1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 16 -8"
			></feColorMatrix>
		</filter></defs
	><g>
		<rect width="100%" height="100%" fill="url(#gggrain-gradient)"></rect>
		<rect
			width="100%"
			height="100%"
			fill="transparent"
			filter="url(#gggrain-filter)"
			opacity="0.72"
			style="mix-blend-mode: soft-light"
		>
		</rect>
	</g></svg
>

<!-- ?xml version="1.0" standalone="no"?
<svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
			<stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
			<stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
		</linearGradient>
	</defs>
	<path
		fill="url(#sw-gradient)"
		d="M25.6,-26.9C32.4,-18.8,36.7,-9.4,36.5,-0.2C36.3,8.9,31.5,17.8,24.7,25.6C17.8,33.4,8.9,40.1,-0.2,40.3C-9.3,40.5,-18.6,34.2,-26.5,26.4C-34.4,18.6,-40.8,9.3,-40.8,0.1C-40.7,-9.2,-34.2,-18.4,-26.3,-26.5C-18.4,-34.7,-9.2,-41.7,0.1,-41.8C9.4,-41.8,18.8,-35,25.6,-26.9Z"
		width="100%"
		height="100%"
		transform="translate(50 50)"
		stroke-width="0"
		style="transition: all 0.3s ease 0s;"
	></path>
</svg> -->
