import React, { useState, useEffect } from 'react'; // x Component,
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'; // x Button, Linking
//import {Picker} from '@react-native-community/picker'; // KSW 3 Feb 2023

/*
To redisplay the page when the language is changed:
https://stackoverflow.com/questions/68506603/dynamically-toggle-language-and-re-render-react-native-app
https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442

forceUpdate()  NO
*/

// expo Localization
import i18n from 'i18n-js';

//export default class Home extends Component {
const Home = (props) => {

  const [languageSelected, setLanguageSelected] = useState(i18n.locale.substring(0,2) === 'fr' ? 'fr' : 'en'); //('en');

  const changeLanguage = (langsel) => {
    setLanguageSelected(langsel)
    i18n.locale = langsel
  }

  useEffect(() => {
    console.log("changing language from " + languageSelected + " to " + 'en');
    //changeLanguage('en');
  });

  // https://en.wikipedia.org/wiki/Regional_indicator_symbol
  /*const lang = () => [
    {key:'en',label:'🇬🇧'},
    {key:'fr',label:'🇫🇷'},
    {key:'es',label:'🇪🇸'},
    {key:'de',label:'🇩🇪'},
    {key:'la',label:'🇻🇦'},
    {key:'ru',label:'🇷🇺'}
  ]*/
  const lang = () => [
    {key:'en',label:'FR'},
    {key:'fr',label:'EN'}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('About')}>
          <Text style={styles.buttontext}>{i18n.t('homebutton.1')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Contact')}>
          <Text style={styles.buttontext}>{i18n.t('homebutton.2')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Links')}>
          <Text style={styles.buttontext}>{i18n.t('homebutton.3')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeLanguage(languageSelected === 'en' ? 'fr' : 'en')}
          >
          {/*<Text>{languageSelected}</Text>*/}
          <Text style={styles.buttontext}>{lang()[languageSelected === 'en' ? 0 : 1].label}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Query')}>
        <Image
          source={languageSelected === 'fr' ? require('../assets/gwp/GWP_WebPage_HomePageFR.png') : require('../assets/gwp/GWP_WebPage_HomePage.png')}
          style = {styles.image}
        />
      </TouchableOpacity>

      <View style={styles.copyright}>
        <Text style={styles.copyrighttext}>© {i18n.t('homebutton.4')} 2023</Text>
        <Text style={styles.copyrighttext}>v: 12 {i18n.t('floweringin.1').substring(0,3) } E</Text>
        {/*<TouchableOpacity
          style={styles.button}
          onPress={ ()=>{ Linking.openURL('https://www.primordion.com/Xholon/gwt/ShirkingPixies.html')}}
          >
          <Text style={styles.copyrighttext}>Shirking Pixies</Text>
        </TouchableOpacity>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'white' //'#d1f4a4'
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  button: {
    paddingBottom: 5,
    textTransform: 'none',
  },
  buttontext: {
    fontSize:18
  },
  copyright: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  copyrighttext: {
    fontSize: 9,
    color: "grey"
  },
  image: {
    height: 450,
    width: 315
  }
});

export default Home;
