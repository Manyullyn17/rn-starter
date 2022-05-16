import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = "Manuel";
	return <View>
		<Text style={styles.textStyleHeader}>RS Components</Text>
		<Text style={styles.textStyle}>My name is {name} and I'm here to sell you shit you don't need</Text>
	</View>
};

const styles = StyleSheet.create({
	textStyleHeader: {
		fontSize: 45,
		marginHorizontal: 10,
	},
	textStyle: {
		fontSize: 20,
		marginHorizontal: 10,
	},
});

export default ComponentsScreen;
