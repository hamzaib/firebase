import React, { Component } from 'react';
import firebase from './firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, StackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';



export default class HomeScreen extends Component {

    postDatabase = firebase.database().ref('car');
    state = { cars: {}, selectedId: '' }
    componentDidMount() {
        this.postDatabase.on('value', cars => {
            const carsJSON = cars.val();
            this.setState({ cars: carsJSON === null ? {} : carsJSON });

        })

        // this.carDatabase.push({color: 'yellow', id: '23'})
    }





    create() {
        this.postDatabase
            .push('Yesterday At 2PM' )
    }

    
    //Delete 

    delete() {
        if (this.state.selectedId === '') {
          return;
        }
        this.postDatabase.child(this.state.selectedId).set(null)
        this.setState({ selectedId: '' })



    }




    render() {
        return (
            <View style={{ flex: 1 }}>

                <ScrollView
                    // contentContainerStyle={{ paddingTop: 86 }}
                    style={{ flex: 1 }}>


                    <ScrollView horizontal>
                        <View style={styles.postsContainer}>
                            <View style={styles.circlecontainers}>
                                <Image style={styles.circleimages} source={require("../assets/home.jpg")}></Image>
                                <Text>Data night</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/herocontact.jpg")}></Image>
                                <Text>travel</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/camera1.jpg")}></Image>
                                <Text>camera</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/girl1.jpg")}></Image>
                                <Text>girl</Text>
                            </View>
                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/oldman.jpg")}></Image>
                                <Text>oldman</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/random2.jpg")}></Image>
                                <Text>wedding</Text>
                            </View>
                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/camera2.jpg")}></Image>
                                <Text>girl</Text>
                            </View>
                        </View>

                    </ScrollView>




                    {
                        Object.keys(this.state.cars).map((car, index) =>
                            <TouchableOpacity key={index} onPress={() => this.setState({ selectedId: car })}>
                                <View style={styles.detailscontainer}>

                                 
                                    <Image style={styles.images} source={require("../assets/bbc.png")}></Image>
                                    <View style={styles.textcontainer}>
                                        <Text style={styles.username}>BBC </Text>
                                        <Text style={styles.date}>{(this.state.cars[car])} </Text>
                                    </View>
                                </View>

                                <View>
                                    <Image style={styles.postsimages} source={require("../assets/bbc1.jpg")}></Image>
                                    <Text style={styles.captiontext}>This post came in {(this.state.cars[car])}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    <Button title="Create Post" onPress={() => this.create()}></Button>

                    <Button title="Delete Post" onPress={() => this.delete()}></Button>



{/* 
                    <View style={styles.detailscontainer}>
                        <Image style={styles.images} source={require("../assets/barca.png")}></Image>
                        <View style={styles.textcontainer}>
                            <Text style={styles.username}>FCBARCELONA </Text>
                            <Text style={styles.date}>Today at 12:44  </Text>
                        </View>
                    </View>


                    <View>
                        <Image style={styles.postsimages} source={require("../assets/barca1.jpg")}></Image>
                        <Text style={styles.captiontext}>Barca situation after defeat to liverpool. </Text>
                    </View>

                    <View style={styles.detailscontainer}>
                        <Image style={styles.images} source={require("../assets/bmw.png")}></Image>
                        <View style={styles.textcontainer}>
                            <Text style={styles.username}>BMW </Text>
                            <Text style={styles.date}>Yesterday at 12:30 </Text>
                        </View>
                    </View>


                    <View>
                        <Image style={styles.postsimages} source={require("../assets/bmw1.jpg")}></Image>
                        <Text style={styles.captiontext}>BMW new i3 audition Toronto</Text>
                    </View>
 */}


                </ScrollView>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    postsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',

        alignItems: 'center',
        textAlign: "center"



    },

    detailscontainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
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
        height: 45,
        width: 45,
        borderRadius: 23,
        marginRight: 10
    },
    username: {
        fontSize: 16,
        fontWeight: '500'
    },
    date: {
        fontSize: 14,


    },
    postsimages: {
        height: 200,
        width: null,

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
    }

});