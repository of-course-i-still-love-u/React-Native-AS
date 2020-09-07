import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Image, Alert } from 'react-native';
// import {AntDesign,Entypo} from '@expo/vector-icons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




export default class FloatingActionButton extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    //   }

    animation = new Animated.Value(0)

    toggleMenu = () => {

        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true,



        }).start();

        this.open = !this.open;

    };

    clickMe() {

        Alert.alert("Thanks you");

    }
    render() {

        const venndiagram = {
            transform: [
                { scale: this.animation },
                {

                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -190]
                    })


                }
            ]

        }

        const piechart = {
            transform: [
                { scale: this.animation },
                {

                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -130]
                    })


                }
            ]

        }

        const statistics = {
            transform: [
                { scale: this.animation },
                {

                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })


                }
            ]

        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"]
                    })


                }
            ]

        };



        return (
            <View style={[styles.container, this.props.style]}>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, venndiagram]}>
                        {/* <Entypo name="plus" size={24} color="#FFF" /> */}
                        <Image source={require('./img/SpinnerLoading.png')} resizeMode='cover' style={{ height: 40, width: 40 }}/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, piechart]}>
                        {/* <Entypo name="plus" size={24} color="#FFF" /> */}
                        <Image source={require('./img/SpinnerLoading.png')} resizeMode='cover' style={{ height: 40, width: 40 }}/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.clickMe}>
                    <Animated.View style={[styles.button, styles.secondary, statistics]} >
                        {/* <Entypo name="plus" size={24} color="#FFF" /> */}
                        <Image source={require('./img/SpinnerLoading.png')} resizeMode='cover' style={{ height: 40, width: 40 }}/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]} >
                        {/* <AntDesign name="plus" size={24} color="black" /> */}
                        {/* <FontAwesome5 name={'comments'} /> */}
                        {/* <Icon name="md-menu" size={24}/> */}
                        <Image source={require('./img/rocket.png')} resizeMode='cover' style={{ height: 40, width: 40 }} />
                        {/* <Icon.Button name="facebook" size={24} color="black" /> */}

                    </Animated.View>
                </TouchableWithoutFeedback>



            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute",

    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF0000',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10 }

    },
    menu: {

        backgroundColor: '#F02A4B',
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#FFF"


    }






})

