import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

	return <View>
        <Text style={styles.text}>Enter Name:</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text style={styles.text}>My name is {name}</Text>
        {true ? <Text>That was true</Text> : null}
    </View>
};

const styles = StyleSheet.create({
	input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontsize: 10,
    },
    text: {
		fontSize: 20,
		marginHorizontal: 10,
	},
});

export default TextScreen;
