import React, { Component } from 'react';
import { Constants } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';





export default class HomeScreen extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{ paddingTop: 86 }}
                    style={{ flex: 1 }}>
                


                    <View style={styles.detailscontainer}>
                        <Image style={styles.images} source={require("../assets/john.jpg")}></Image>
                        <Text style={styles.profilebio}>JOHN DOE</Text>
                        <Text style={styles.profiletext}>Happy, enthusiastic, friendly and outgoing.</Text>
                        

                    </View>

                    <View style={styles.detailscontainer}>
                        
                 
                            <Text style={styles.profilebio}>POSTS </Text>
                         
                     
                    </View>


                    <View style={styles.postsContainer}>
                        <Image style={styles.postsimages} source={require("../assets/john1.jpg")}></Image>
                        <Image style={styles.postsimages} source={require("../assets/john2.jpg")}></Image>
                        <Image style={styles.postsimages} source={require("../assets/john3.jpg")}></Image>
                    </View>

                    <View style={styles.postsContainer}>

                   
                        <Image style={styles.postsimages} source={require("../assets/john4.jpg")}></Image>
                        <Image style={styles.postsimages} source={require("../assets/john5.jpg")}></Image>
                        </View>
   

                

                  



                </ScrollView>

                <View style={styles.topheader}>
                    <Text style={styles.titletext}>PROFILE</Text>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    postsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 0,
        alignItems: 'center',
        textAlign: "center",
        marginTop: 3
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

        marginTop: 10


    },

    textcontainer: {
        justifyContent: 'center'

    },

    titletext: {
        top: 20,
        fontWeight: '800',
        fontSize: 16,
        color: 'white'
    },
    images: {
        height: 300,
        width: null
 
    },


    postsimages: {
        height: 120,
        width: 120,
        marginRight: 3,
        


    },

    captiontext: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontSize: 14
    },

    circleimages: {
        height: 65,
        width: 65,
        borderRadius: 33

    },

    circlecontainers: {
        marginRight: 15,

        alignItems: 'center'

    }, 

    profilebio:{
        paddingHorizontal: 0,
        paddingVertical: 4,
        fontSize: 17,
        fontWeight: '600',
        marginTop: 10



    },

    profiletext:{
        fontSize: 14,
    }

});