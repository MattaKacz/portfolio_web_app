'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const VantaNetBackground = () => {
	const vantaRef = useRef(null);
	const [effect, setEffect] = useState(null);

	useEffect(() => {
		if (!vantaRef.current || effect) return;

		const loadEffect = async () => {
			const NET = (await import('vanta/dist/vanta.net.min')).default;

			const newEffect = NET({
				el: vantaRef.current,
				THREE,
				color: 0xff00ff,
				backgroundColor: 0x0a0a23,
				maxDistance: 15.0,
				spacing: 15.0,
				scale: 1.0,
				scaleMobile: 2.5,
				forceAnimate: true,
			});

			setEffect(newEffect);
			window.dispatchEvent(new Event('resize'));
		};

		loadEffect();

		return () => {
			if (effect) effect.destroy();
		};
	}, [effect]);

	return (
		<div
			ref={vantaRef}
			className='fixed top-0 left-0 w-screen h-screen z-0'
			style={{
				pointerEvents: 'none',
				transform: 'translateZ(0)',
			}}
		/>
	);
};

export default VantaNetBackground;
