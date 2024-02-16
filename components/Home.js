import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, Button, Pressable, } from "react-native";
import Footer from "./Footer";
import img1 from "../assets/adaptive-icon.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
const Home = () => {
    const [like, setLike] = useState(0);
    return (
        <ScrollView style={Styles.main}>
            <View style={Styles.b1}>
                <View style={Styles.innerbtn}>
                    <Icon2
                        name="game-controller"
                        size={35}
                        color="green"
                    />
                    <Text>Games</Text>
                </View>
                <View style={Styles.innerbtn}>
                    <Icon2
                        name="tv"
                        size={35}
                        color="red"
                    />
                    <Text>Movies</Text>
                </View>
                <View style={Styles.innerbtn}>
                    <Icon1
                        name="github"
                        size={35}
                        color="red"
                    />
                    <Text>Github</Text>
                </View>
                <View style={Styles.innerbtn}>
                    <Icon3
                        name="dumbbell"
                        size={35}
                        color="black"
                    />
                    <Text>GYM</Text>
                </View>



            </View>



            <Image style={Styles.b2}
                source={img1}
            />
            <View style={Styles.like}>
                <View style={Styles.innerbtn}>
                    <Pressable onPress={() => setLike(like => like + 1)}>
                        <Icon
                            name="heart"
                            size={28}
                            color="red"
                            marginTop={2}
                        />
                        <Text>Like</Text>
                    </Pressable>
                    <Text>{like}</Text>
                </View>

                <View style={Styles.innerbtn}>
                    <Pressable>
                        <Icon
                            name="comments"
                            size={28}
                            color="red"
                            marginTop={2}
                        />
                        <Text>Comment</Text>
                    </Pressable>
                    <Text>{like}</Text>
                </View>
                <View style={Styles.innerbtn}>
                    <Pressable>
                        <Icon1
                            name="shoppingcart"
                            size={28}
                            color="red"
                            marginTop={2}
                        />
                        <Text>Add to Card</Text>
                    </Pressable>
                    <Text>{like}</Text>
                </View>


            </View>




            <View>

            </View>
            <Footer />
        </ScrollView>
    );
}
const Styles = StyleSheet.create({
    main: {
        flex: 1,

    },
    b1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 3,
    },
    b2: {
        marginTop: 20,
        height: 'auto',
        width: '100%',
        backgroundColor: 'blue',
        aspectRatio: 1,

    },
    like: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,

    },
    innerbtn: {
        flexDirection: 'column',

    }
})
export default Home;