import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import NewImg from '../asset/gia-xe-mazda-2.jpg';

export default class NewListItem extends Component{
    render() {
      return (
        <View>
            <TouchableOpacity onPress={()=>{
                this.setState({
                    visibleModal: 5
                })
            }}>
                <View style={styles.container}>
                    <View style={styles.wrapImg}>
                        <Image style={styles.categoryImg} source={NewImg} />
                    </View>
                    <View style={styles.wrapContent}>
                        
                    </View>


                </View>
                
            </TouchableOpacity>
        </View>
      )
    };
}



const styles = StyleSheet.create({
    categoryImg: {
        width: 93,
        height: 93,
        borderRadius: 4
    },
    wrapImg: {
        paddingLeft: 8
    },
    container: {
        alignItems: 'center',
        height: 125,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1,
        marginBottom: 16,
    },
    titleNew: {
        marginBottom: 16,
        fontWeight: '700',
        fontSize: 16,
    },
    wrapContent: {
        paddingLeft: 16,
        marginBottom: 20,
        backgroundColor: 'red',
    },
    exprieDate: {
        fontSize: 12,
    },
    content: {
        marginBottom: 6,
        fontSize:16,
        color:'rgba(0, 141, 166, 1)'
    },
    wrapNews:{
        flexDirection:'row',
        justifyContent: 'space-between',
    }
})