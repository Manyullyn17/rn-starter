import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return <View>
		<Button
			title='Add Color'
			onPress={() => {
				setColors([...colors, randomRgb()]);	// ... = copy all from colors
			}}
		/>
		<FlatList
			keyExtractor={(item) => item}
			data={colors}
			renderItem={({item}) => {
				return <View style={{ height: 100, width: 100, backgroundColor: item }} />
			}}
		/>
	</View>
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);	// random ... 0-1
	const green = Math.floor(Math.random() * 256);	// floor ... 69.4201 -> 69
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;
