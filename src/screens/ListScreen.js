import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Lukas', age: '18' },
		{ name: 'Matthias' , age: '19' },
		{ name: 'Patrick 🐕' , age: '19' },
		{ name: 'Nico' , age: '18' },
		{ name: 'Lukas 2' , age: '18' },
		{ name: 'Elias' , age: '19' },
		{ name: 'idk' , age: '3' },
		{ name: 'am lazy' , age: '7' },
		{ name: 'don\'t care' , age: '(╯°□°)╯︵ ┻━┻' },
		{ name: 'nyaa', age: 'nyee' },
		{ name: 'leave', age: 'me' },
	];

	return (
		<FlatList 
			// horizontal
			// showsHorizontalScrollIndicator={false}
			keyExtractor={friend => friend.name}	// or add "key" property to array
			data={friends} 
			renderItem={({ item }) => {
				return <Text style={styles.textStyle}>{item.name} ({item.age})</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 30,
		marginHorizontal: 10,
		fontSize: 20,
	}
});

export default ListScreen;
