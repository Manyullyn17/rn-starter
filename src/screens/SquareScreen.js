import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
	// state === { red: number, green: number, blue: number };
	// action === { color: 'red' || 'green' || 'blue', amount: 15 || -15 };

	switch (action.color) {
		case 'red':
			return state.red + action.amount > 255 || state.red + action.amount < 0
				? state
				: { ...state, red: state.red + action.amount };
		case 'green':
			return state.green + action.amount > 255 || state.green + action.amount < 0
				? state
				: { ...state, green: state.green + action.amount };
		case 'blue':
			return state.blue + action.amount > 255 || state.blue + action.amount < 0
				? state
				: { ...state, blue: state.blue + action.amount };
		default:
			return state;
	}
};

const SquareScreen = () => {
	/* w/ useState
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		switch (color) {
			case 'red':
				red + change > 255 || red + change < 0 ? null : setRed(red + change);	// '? x : y' = if true -> x, else y
				return;																	// null = do nothing
			case 'green':
				green + change > 255 || green + change < 0 ? null : setGreen(green + change);
				return;
			case 'blue':
				blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
				return;
			default:
				return;
		}
	};
	*/

	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
	const { red, green, blue } = state;

	return <View> 
		<ColorCounter 
			onIncrease={() => dispatch({ color: 'red', amount: COLOR_INCREMENT })}		// setColor('red', COLOR_INCREMENT)}
			onDecrease={() => dispatch({ color: 'red', amount: -COLOR_INCREMENT })}		// setColor('red', -COLOR_INCREMENT)}
			color='Red'
		/>
		<ColorCounter 
			onIncrease={() => dispatch({ color: 'green', amount: COLOR_INCREMENT })}	// setColor('green', COLOR_INCREMENT)}
			onDecrease={() => dispatch({ color: 'green', amount: -COLOR_INCREMENT })} 	// setColor('green', -COLOR_INCREMENT)}
			color='Green'
		/>
		<ColorCounter 
			onIncrease={() => dispatch({ color: 'blue', amount: COLOR_INCREMENT })} 	// setColor('blue', COLOR_INCREMENT)}
			onDecrease={() => dispatch({ color: 'blue', amount: -COLOR_INCREMENT })} 	// setColor('blue', -COLOR_INCREMENT)}
			color='Blue'
		/>
		<View 
			style={{
				height: 150, 
				width: 150, 
				backgroundColor: `rgb(${red}, ${green}, ${blue})`
			}}
		/>
	</View>
};

const styles = StyleSheet.create({});

export default SquareScreen;
