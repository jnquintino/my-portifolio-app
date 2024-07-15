import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {useState} from "react";
import Social from "./src/screens/Social/Social";
import Skills from "./src/screens/Skills/Skills";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Social');

  const switchScreen = () => {
    setCurrentScreen(currentScreen === 'Social' ? 'Skills' : 'Social');
  };

  return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        {currentScreen === 'Social' && <Social switchScreen={switchScreen}/>}
        {currentScreen === 'Skills' && <Skills switchScreen={switchScreen}/>}
        <StatusBar style="auto"/>
      </View>
  );
}
