import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active ? 'text-white border-b-2 border-purple-500' : 'text-[#ADB7BE] hover:text-white';
	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}> {children} </p>
		</button>
	);
};

export default TabButton;
