import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View,Image } from 'react-native';
import Modal from 'react-native-modal';
import ImgCategory from '../asset/gia-xe-mazda-2.jpg';

export default class ExampleModal extends React.Component {
    state = {
        visibleModal: null,
    };

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text style={styles.title}>Please show this screen for the Store’s staff </Text>
            <Image style={{height:140,marginTop:25,width:400,borderRadius:4}} source={ImgCategory}/>
            <View style={styles.wrapcontent}>
                <Text>Original blend coffee </Text>
                <Text>Free 1 cup</Text>
                <Text>Expired date: 2018/11/06</Text>
            </View>
            <View style={styles.wrapDetail}>
                <View>
                    <Text style={styles.titleDetails}>Term $ Conditions</Text>
                    <Text style={styles.contentDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </View>
            </View>
            <View style={styles.wrapDetail1}>
                <View>
                    <Text style={styles.titleDetails}>Contact info</Text>
                    <Text style={styles.contentDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{
                this.setState({
                    visibleModal:null
                })
            }}>
                <View style={styles.button}>
                    <Text>X</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                {this._renderButton('Bottom half modal', () => this.setState({ visibleModal: 5 }))}
                <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    {this._renderModalContent()}
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'lightblue',
      padding: 12,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
      backgroundColor: 'white',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 42,
      paddingLeft:16,
      paddingRight:16,
      marginBottom: 56,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
      justifyContent: 'center',
      margin: 0,
      borderRadius:8,
    },
    title:{
        fontSize:16,
        marginTop:20,
        paddingTop: 20,
        color:'red'
    },
    wrapDetail:{
        marginTop:11,
        marginBottom:8
    },
    wrapDetail1:{
        marginBottom:8
    },

    titleDetails:{
        fontSize:16,
        fontWeight: '700',
        marginBottom:6
    },
    contentDetails:{
        fontSize:14,
        textAlign: 'justify',
        lineHeight: 20,
    },
    wrapcontent:{
        alignItems:'center',
        marginTop:10,
        marginBottom:16,
        borderBottomWidth :1,
        borderBottomColor: 'gray',
    }
  });