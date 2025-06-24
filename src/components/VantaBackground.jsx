'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// p5 is now imported dynamically below to prevent server-side rendering errors

const VantaBackground = () => {
	const vantaRef = useRef(null);
	const [vantaEffect, setVantaEffect] = useState(null);

	useEffect(() => {
		if (!vantaEffect && vantaRef.current) {
			import('vanta/dist/vanta.cells.min.js')
				.then((vantaModule) => {
					const CELLS = vantaModule.default;
					if (CELLS) {
						const effect = CELLS({
							el: vantaRef.current,
							THREE: THREE,
							mouseControls: true,
							touchControls: true,
							gyroControls: false,
							minHeight: 200.0,
							minWidth: 200.0,
							scale: 1.0,
							scaleMobile: 1.0,
							color1: 0x9c19b6, // pierwszy kolor
							color2: 0x401aa4, // drugi kolor
							size: 1.2, // rozmiar komórek
							backgroundColor: 0x0f002f,
							forceAnimate: true,
						});
						setVantaEffect(effect);
						window.dispatchEvent(new Event('resize'));
					}
				})
				.catch((error) => {
					console.error('Error loading Vanta CELLS effect:', error);
				});
		}

		return () => {
			if (vantaEffect) {
				vantaEffect.destroy();
			}
		};
	}, [vantaEffect]);

	return (
		<div
			className='relative z-10'
			ref={vantaRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
				pointerEvents: 'none',
				transform: 'translateZ(0)',
			}}
		/>
	);
};

export default VantaBackground;
