import React ,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { Container, Header,Thumbnail ,Tab,Tabs,Content, Card,ScrollableTab, Left,CardItem, Body } from 'native-base';

type BlogItemProps = {
    titlePromo:string,
    contentPoro:string,
    expreidDate:string
}

export default class PromotionItem extends Component<BlogItemProps>{
    render(){
        return(
            <Container>
                <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Tab1">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2 />
                    </Tab>
                    <Tab heading="Tab3">
                        <Tab3 />
                    </Tab>
                    <Tab heading="Tab4">
                        <Tab4 />
                    </Tab>
                    <Tab heading="Tab5">
                        <Tab5 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
};


const styles = StyleSheet.create({
    cardPromotion:{
        borderRadius:5,
        backgroundColor:'rgb 255 255 255',
        height: 300
    }
});