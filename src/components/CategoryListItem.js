import React from 'react';
import {
    Image,
    View, Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import ImgCategory from '../asset/gia-xe-mazda-2.jpg';
import Modal from 'react-native-modal';
export default class CategoryListItem extends React.Component {

    state = {
        visibleModal: null,
    };

    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text style={styles.title}>Please show this screen for the Store’s staff </Text>
            <Image style={{ height: 140, marginTop: 25, width: 380, borderRadius: 4,paddingLeft:3,paddingRight:3 }} source={ImgCategory} />
            <View style={styles.wrapcontent1}>
                <Text style={{ fontSize: 16 }}>Original blend coffee </Text>
                <Text style={{ fontSize: 16, color: 'rgba(0, 141, 166, 1)' }}>Free 1 cup</Text>
                <Text style={{ fontSize: 12 }}>Expired date: 2018/11/06</Text>
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
           
        </View>
    );
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
                        <Image style={styles.categoryImg} source={ImgCategory} />
                    </View>
                    <View style={styles.wrapContent}>
                        <Text style={styles.titleStore}>Original blend coffee </Text>
                        <Text style={styles.content}>Free 1 cup</Text>
                        <Text style={styles.exprieDate}>Expired date: 2018/11/06</Text>
                    </View>


                </View>
                
            </TouchableOpacity>
                <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    {this._renderModalContent()}
                    <TouchableOpacity onPress={() => {
                this.setState({
                    visibleModal: null
                })
            }}>
                <View style={styles.button}>
                    <Text>X</Text>
                </View>
            </TouchableOpacity>
                </Modal>
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
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1,
        marginBottom: 16
    },
    titleStore: {
        marginBottom: 4,
        fontWeight: '700',
        fontSize: 16
    },
    wrapContent: {
        paddingLeft: 8,
        marginBottom: 20,
    },
    exprieDate: {
        fontSize: 12,
    },
    content: {
        marginBottom: 6,
        fontSize:16,
        color:'rgba(0, 141, 166, 1)'
    },
    button: {
        padding: 12,
        flexDirection:'row',
        justifyContent: 'center',
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
        marginBottom: 10,
        borderColor: 'gray',
      },
      bottomModal: {
        justifyContent: 'center',
        margin: 0,
        borderRadius:8,
      },
      title:{
          fontSize:16,
          paddingTop: 10,
          color:'rgba(255, 71, 61, 1)'
      },
      wrapDetail:{
          marginBottom:8,
          paddingLeft:18,
          paddingRight:16
      },
      wrapDetail1:{
          marginBottom:8,
          paddingLeft: 18,
          paddingRight: 16,
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
      wrapcontent1:{
          alignItems:'center',
          marginTop:10,
          marginBottom:16,
          borderBottomWidth :1,
          paddingBottom: 16,
          borderBottomColor: 'gray',
          alignSelf: 'stretch',
      }
})