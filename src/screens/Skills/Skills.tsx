import React from 'react';
import {styles} from "./Styles";
import {Image, Text, TouchableOpacity, View} from "react-native";
import photo from "../../../assets/foto.jpg";
import Skill from "../../components/Skill/Skill";

// @ts-ignore
export default function Skills({switchScreen}) {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.photo}/>
            <Text style={styles.text}>Minhas Habilidades</Text>
            <Skill name="Java" stars="5"/>
            <Skill name="HTML" stars="5"/>
            <Skill name="CSS" stars="5"/>
            <Skill name="Web3" stars="5"/>
            <Skill name="Javascript" stars="4"/>
            <Skill name="React Native" stars="4"/>
            <TouchableOpacity onPress={switchScreen} style={styles.skills}>
                <Text style={styles.subtext}>Meu Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}
