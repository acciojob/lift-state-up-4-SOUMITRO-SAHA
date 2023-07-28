import React from "react";

const Child = ({ idx, item, price, removeItemHandler }) => {
	return (
		<li key={`${idx}-${price}`}>
			<span>{item}</span>
			<span> - </span>
			<span>${price}</span>

			<button onClick={() => removeItemHandler(idx)}>Remove</button>
		</li>
	);
};

export default Child;
