import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return <View>
		<Text style={styles.text}>Hello there!{"\n"}General Kenobi</Text>
		<Button 
			onPress={() => navigation.navigate("Components")}
			title="Go to RS Components"
		/>
		<TouchableOpacity onPress={() => navigation.navigate("List")}>
			<Text style={styles.button}>Go to Friend List</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => navigation.navigate("Image")}>
			<Text style={styles.button}>Go to Images</Text>
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
		textAlign: "center",
		marginVertical: 5,
	}
});

export default HomeScreen;
