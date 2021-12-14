import React from "react"

const Ingredient = (props) => {
	console.log("data HERE", props)
	return (
		<li style={{ background: props.ingredient.color }}>
			{props.ingredient.name}
			{
				props.isList ?
					<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
					:
					<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
			}
		</li>

	)
}

export default Ingredient