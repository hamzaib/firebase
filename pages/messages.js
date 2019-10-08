import React, { Component } from 'react';
import { Constants } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';





export default class Message extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{ paddingTop: 86 }}
                    style={{ flex: 1 }}>



                    <View style={styles.postsContainer}>

                        <View style={styles.detailscontainer}>
                            <Text style={styles.messagetitle}>MESSAGES</Text>

                        </View>
                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/girl1.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Jessica </Text>
                                <Text style={styles.date}>heyy </Text>
                            </View>
                        </View>




                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/girl2.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Amanda </Text>
                                <Text style={styles.date}>Coming? </Text>
                            </View>

            
                        </View>




                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/g.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Michele </Text>
                                <Text style={styles.date}>love you ... </Text>
                            </View>
                        </View>

                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/g1.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Kiesha </Text>
                                <Text style={styles.date}>love you ... </Text>
                            </View>
                        </View>


                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/g2.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Natasha </Text>
                                <Text style={styles.date}>Whats up ... </Text>
                            </View>
                        </View>

                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/g3.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Laura </Text>
                                <Text style={styles.date}>Im coming over </Text>
                            </View>
                        </View>

                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/g4.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Rebecca </Text>
                                <Text style={styles.date}>Hello ... </Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.postsContainer}>

                        <View style={styles.detailscontainer}>
                            <Text style={styles.messagetitle}>SUGGESTIONS</Text>

                        </View>
                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/b1.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>Karim </Text>
                                <Text style={styles.date}>karim_12</Text>
                            </View>
                        </View>

                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/b2.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>nathan </Text>
                                <Text style={styles.date}>nathan_12</Text>
                            </View>
                        </View>

                        <View style={styles.detailscontainer}>
                            <Image style={styles.images} source={require("../assets/oldman.jpg")}></Image>
                            <View style={styles.textcontainer}>
                                <Text style={styles.username}>blake </Text>
                                <Text style={styles.date}>blake_12</Text>
                            </View>
                        </View>
                    </View>







                </ScrollView>

                <View style={styles.topheader}>
                    <Text style={styles.titletext}>MESSAGES</Text>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    postsContainer: {

        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',
    },

    topheader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 85,
        backgroundColor: 'maroon',
        alignItems: 'center',
        justifyContent: 'center'


    },

    detailscontainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        marginTop: 10


    },


    messagetitle: {

        fontWeight: '600',
        fontSize: 16,

    },
    images: {
        height: 45,
        width: 45,
        borderRadius: 23,
        marginRight: 10
    },

    date: {
        fontSize: 14,


    },

    circleimages: {
        height: 65,
        width: 65,
        borderRadius: 33

    },
    titletext: {
        top: 20,
        fontWeight: '800',
        fontSize: 16,
        color: 'white'
    },

 

});