import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return <View>
		<Text style={styles.text}>Hello there!{'\n'}General Kenobi</Text>
		<Button	// simple Button
			onPress={() => navigation.navigate('Components')}
			title='Go to RS Components'
		/>
		<TouchableOpacity onPress={() => navigation.navigate('List')} /* customizable Button */ >	
			<Text style={styles.button}>Go to Friend List</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => navigation.navigate('Image')}>
			<Text style={styles.button}>Go to Images</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => navigation.navigate('Counter')}>
			<Text style={styles.button}>Go to Counter</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => navigation.navigate('Color')}>
			<Text style={styles.button}>Go to Colors</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => navigation.navigate('Square')}>
			<Text style={styles.button}>Go to Square</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => navigation.navigate('Text')}>
			<Text style={styles.button}>Go to Text</Text>
		</TouchableOpacity>
	</View>
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		marginHorizontal: 10,
	},
	button: {
		fontSize: 20,
		textAlign: 'center',
		marginVertical: 5,
	}
});

export default HomeScreen;
