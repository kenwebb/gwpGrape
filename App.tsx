import 'react-native-gesture-handler'; // this must be the first import
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Platform } from 'react-native'; // x StyleSheet, Text, 
import i18n from 'i18n-js';
import { NavigationContainer } from '@react-navigation/native'; // x DarkTheme
import { createStackNavigator } from '@react-navigation/stack'; // x TransitionPresets

import HomeScreen from './components/HomeComponent';
import QueryScreen from './components/QueryComponent';
import FlowersScreen from './components/FlowersComponent';
import FlowerDetailsScreen from './components/FlowerDetailsComponent';
import PhotoDetailsScreen from './components/PhotoDetailsComponent';
import PhotoZoomPanScreen from './components/PhotoZoomPanComponent';

import AboutScreen from './components/AboutComponent';
import ContactScreen from './components/ContactComponent';
import LinksScreen from './components/LinksComponent';
//import CopyrightScreen from './components/CopyrightComponent'

// picker components(s)
import QueryPickerScreen from './components/QueryPickerComponent';

const Stack = createStackNavigator();

import * as Localization from 'expo-localization';
import { getLocalizedStrings } from './db/gwp/localizedStrings';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// see: https://reactnavigation.org/docs/hello-react-navigation
// "Sometimes we might want to pass additional props to a screen."

/**
 * Note 8 Feb 2023 Ken Webb
 * VS Code identifies multiple errors, whic I don't need to fix (for now)
 * - I did fix i18n error using: yarn add --dev @types/i18n-js
 * - I don't need to fix Component name errors; my file names use .native. .web. 
 *   - see: https://reactnative.dev/docs/platform-specific-code
 * - other errors have to do with required/default/unused function params
 *   - I should fix these later
 */

const LocalizationContext = React.createContext();

const App = (props) => {
  // https://docs.expo.io/versions/v39.0.0/sdk/localization/

  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = getLocalizedStrings("All");

  const [locale, setLocale] = React.useState(Localization.locale);
  console.log(locale); // en-CA or fr-CA, depending on device setting
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  // Set the locale once at the beginning of your app.
  i18n.locale = locale;

  //i18n.locale = "fr";
  // When a value is missing from a language it'll fallback to another language with the key present.
  // see also: https://reactnavigation.org/docs/localization
  i18n.fallbacks = true;
  i18n.defaultLocale = "en";

  const forFadeQ = ({ next }) => ({
    cardStyle: {
      //opacity: current.progress,
      opacity: next.progress, // NO
    },
  });

  const forFadeQP = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      //opacity: next.progress, NOTransitionPresets
    },
  });

  // TODO the screen names do NOT update when a user changes the language
  return (
    <LocalizationContext.Provider value={localizationContext}>
      <NavigationContainer
        //theme={DarkTheme}
      >
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white', //'#3A5F0B',
              // https://stackoverflow.com/questions/51181965/react-navigation-header-has-a-faint-line
              elevation: 0.75, // remove shadow on Android
              //shadowOpacity: 0, // remove shadow on iOS, if needed
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              //fontWeight: 'bold',
              color: 'green',
              //fontSize: 20 // default is 20 ? on Android, web
              fontSize: Platform.OS === 'ios' ? 20 : 20
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={() => ({ title: i18n.t('screen.0') })} />
          <Stack.Screen name="Query" component={QueryScreen} options={() => ({ title: i18n.t('screen.1'),
            cardStyleInterpolator: forFadeQP,
            cardOverlay: () => ( <View style={{flex: 1, backgroundColor: 'transparent',}}/> )
          })} />
          <Stack.Screen name="Flowers" component={FlowersScreen} options={() => ({ title: i18n.t('screen.2') })} />
          <Stack.Screen name="FlowerDetails" component={FlowerDetailsScreen} options={() => ({ title: i18n.t('screen.3') })} />
          <Stack.Screen name="PhotoDetails" component={PhotoDetailsScreen} />
          <Stack.Screen name="PhotoZoomPan" component={PhotoZoomPanScreen} options={() => ({ title: "Photo" })} />

          {/*<Stack.Screen name="About" component={AboutScreen} options={{ title: i18n.t('screen.4') }} />*/}
          {/*NO <Stack.Screen name="About" component={AboutScreen} options={{ headerTitle: <Text>{i18n.t('screen.4')}</Text> }} />*/}

          {/*NO ??? <Stack.Screen name="About" component={AboutScreen}
            options={ ({ route }) => ({ title: route.title })}
          />*/}

          {/*<Stack.Screen name="About" component={AboutScreen}
            //options={{ title: i18n.t('screen.4') }}
            options={({ navigation, route }) => ({
              // YES headerTitle: () => <Text>{i18n.t('screen.4')}</Text>,
              headerTitle: () => i18n.t('screen.4') // YES
            })}
          />*/}

          <Stack.Screen name="About" component={AboutScreen} options={() => ({ title: i18n.t('screen.4') })} />

          {/*<Stack.Screen name="Contact" component={ContactScreen} options={{ title: i18n.t('screen.5') }} />*/}
          <Stack.Screen name="Contact" component={ContactScreen} options={() => ({ title: i18n.t('screen.5') })} />

          <Stack.Screen name="Links" component={LinksScreen} options={() => ({ title: i18n.t('screen.6') })} />

          {/*<Stack.Screen name="Copyright" component={CopyrightScreen} options={{ title: i18n.t('screen.7') }} />*/}

          {/*<Stack.Screen name="QueryPicker" component={QueryPickerScreen} options={{
            //title: i18n.t('screen.8'),
            title: props.route.params.pitems[1], // NO
            //...TransitionPresets.ModalTransition,
            cardStyleInterpolator: forFadeQP,
            cardOverlay: () => ( <View style={{flex: 1, backgroundColor: 'transparent',}}/> ) // 'red' 'transparent'
          }} />*/}
          <Stack.Screen name="QueryPicker" component={QueryPickerScreen}
            options={({ route }) => ({ title: route.params.pitems[1] })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LocalizationContext.Provider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

//export {LocalizationContext, App};
export default App;
