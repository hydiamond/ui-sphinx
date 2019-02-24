import React from 'react';
import {
    Image,
    View,Text,
    StyleSheet
} from 'react-native';
import ImgCategory from '../asset/gia-xe-mazda-2.jpg';
export default class CategoryListItem extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.wrapImg}>
                <Image style={styles.categoryImg} source={ImgCategory}/>    
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.title}>Original blend coffee </Text>
                <Text style={styles.content}>Free 1 cup</Text>
                <Text style={styles.exprieDate}>Expired date: 2018/11/06</Text>
            </View>
            
            
        </View>
      )
    };
}

const styles = StyleSheet.create({
    categoryImg:{
        width:93,
        height:93,
        borderRadius:4
    },
    wrapImg:{
        paddingLeft:8
    },
    container:{
        alignItems:'center',
        height:125,
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        shadowOffset: {width:0,height:0},
        elevation: 1,
        marginBottom:16
    },
    title:{
        marginBottom: 4,
        fontWeight: '700',
        fontSize:16
    },
    wrapContent:{
        paddingLeft:8,
        marginBottom:20,
    },
    exprieDate:{
        fontSize:12,
    },
    content:{
        marginBottom:6
    }
})