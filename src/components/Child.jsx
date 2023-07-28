import React from "react";

const Child = ({ idx, item, price, removeItemHandler }) => {
	return (
		<div key={`${idx}-${price}`}>
			<li>
				<span>{item}</span>
				<span> - </span>
				<span>{price}</span>

				<button onClick={() => removeItemHandler(idx)}>Remove</button>
			</li>
		</div>
	);
};

export default Child;
