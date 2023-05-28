import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons ,Ionicons} from '@expo/vector-icons';
import TextToSpeech from './screens/TextToSpeech';
import { TextToSpeechProvider } from './context/TextToSpeechContext';
import SavedScreen from './screens/SavedScreen';
import DotIndicator from './components/DotIndicator';
import SettingScreen from './screens/SettingScreen';
import ShareScreen from './screens/ShareScreen';


const App = ()=> {

  const Tab = createBottomTabNavigator();
  const tabBarOptions = {
    tabBarActiveTintColor: '#1EF2A6',
    tabBarInactiveTintColor: '#FFF',
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: true,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  };

  const tabBarContainerStyle = {
    position: 'absolute',
    width: 340,
    height: 65,
    left: 10,
    bottom: 10,
    backgroundColor: '#242334',
    borderRadius: 10,
    shadowColor:  '#FFFDFD',
    shadowOffset: {
      width: 2.90667,
      height: 2.90667,
    },
    shadowOpacity: 1,
    shadowRadius: 5.81333,
    elevation: 6,
  };

  return (
    <TextToSpeechProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarStyle: tabBarContainerStyle, ...tabBarOptions }}>
          <Tab.Screen
            name="Home"
            component={TextToSpeech}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Entypo name="home" size={26} color={focused ? '#1EF2A6' : '#fff'} />
              ),
            }}
          />
          <Tab.Screen
            name="Saved"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View>
                  <Entypo name="save" size={26} color={focused ? '#1EF2A6' : '#fff'} />
                  <DotIndicator />
                </View>
              ),
            }}
            component={SavedScreen}
          />
          <Tab.Screen
            name="Setting"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (

                <MaterialIcons name="settings" size={26} color={focused ? '#1EF2A6' : '#fff'} />

              ),
            }}
            component={SettingScreen}
          />
           <Tab.Screen
            name="Share"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (

                <Ionicons name="share-social-sharp"  size={26} color={focused ? '#1EF2A6' : '#fff'} />

              ),
            }}
            component={ShareScreen}
          />

          {/* Add more screens as needed */}
        </Tab.Navigator>
      </NavigationContainer>
    </TextToSpeechProvider>
  );
}

export default App