import React from 'react';
import {styles} from "./Styles";
import {Image, Text, TouchableOpacity, View} from "react-native";
import star from "../../../assets/star.png";

// @ts-ignore
export default function Skill({name, stars}) {
    const starArray = Array.from({ length: stars }, (_, index) => index);

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.subtext}>{name}: </Text>
                {starArray.map((_, index) => (
                    <Image key={'key_' + index} source={star} style={styles.image}/>
                ))}
            </View>
        </TouchableOpacity>
    );
}
