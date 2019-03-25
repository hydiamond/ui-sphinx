/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
// import App from './App';
import store from "./store";
import Text from './components/TextCustom';
import Animation from './components/animation';
import Button from './components/Button';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Text h3 color="red" align="center">Text Theme</Text>
                <Text h6 align="center" color="blue">Text Bule</Text>
                <Text>Normal</Text>
                <Text size={30} height={90} align="right" underline>Kaak</Text>
                <Button style={styles.button} label="Label" />
                <Button onPress={()=>{
                    alert("Xin chao huy")
                }} style={styles.button} label="Opacity 50%" opacity={0.5} />
                <Button style={styles.button} label="Custom color" color="#FFBC47" />
                <Button style={styles.button} label="Primary color" primary />
                <Button style={styles.button} label="Secondary color" secondary />
                <Button style={styles.button} label="Tertiary color" tertiary />
                <Button style={styles.button} label="Full width" full />
                <Button style={styles.button} label="Rounded corners" rounded />
                <Button style={styles.button} label="Basic" basic rounded />

            </Provider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    button: {
        marginBottom: 4,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e'
    },
});


AppRegistry.registerComponent("AwesomeProject", () => App);
