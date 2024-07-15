import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./Styles";
import photo from "../../../assets/foto.jpg";
import * as Clipboard from 'expo-clipboard';

// @ts-ignore
export default function Social({switchScreen}) {
    function copyToClipboard(info: string) {
        Clipboard.setStringAsync(info).then();
    }

    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.photo}/>
            <Text style={styles.text}>Jo&atilde;o Nuno Quintino</Text>
            <TouchableOpacity onPress={() => copyToClipboard('https://www.linkedin.com/in/jnquintino/')} style={styles.button}>
                <Text style={styles.subtext}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => copyToClipboard('https://github.com/jnquintino')} style={styles.button}>
                <Text style={styles.subtext}>Github</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => copyToClipboard('jnquintino@gmail.com')} style={styles.button}>
                <Text style={styles.subtext}>E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={switchScreen} style={styles.skills}>
                <Text style={styles.subtext}>Minhas Skills</Text>
            </TouchableOpacity>
        </View>
    );
}
