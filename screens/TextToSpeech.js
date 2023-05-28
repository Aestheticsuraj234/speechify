import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Pressable, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';

import TextInputBox from '../components/TextInputBox';
// import ControlBox from '../components/ControlBox';
import { TextToSpeechContext } from '../context/TextToSpeechContext';
import CustomDropdown from '../components/DropDown';

const TextToSpeech = () => {
  const { saveText, theme, language } = useContext(TextToSpeechContext);
console.log(language)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'light' ? '#F7EAFF' : '#242334',
      marginTop: StatusBar.currentHeight,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
    },
    flagIconContainer: {
      zIndex: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme === 'light' ? '#55545f' : '#fff',
    },
    saveBtn: {
      width: '90%',
      height: 50,
      backgroundColor: theme === 'light' ? '#CD70F9' : '#FFD700',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      elevation: 10,
      marginVertical: 20,
    },

    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 10,
      textAlign: 'center',
    },
    bottomContentContainer: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 20,
      gap: 80,
    },
    bottomContainerText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    bottomContainerIconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
    },
    bottomNavigationViewItem: {
      width: '90%',
      height: 50,
      backgroundColor: '#242334',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    emptySavedTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      top: 280,
      width: '100%',
      height: 50,
      borderRadius: 5,
      borderWidth: 5,
      borderColor: '#fff',
    },
    emptySavedText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
    },
    textCountText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
    },
    flagIcon: {
      width: 40,
      height: 40,
      marginRight: 10,
      aspectRatio: 16 / 9,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: theme === 'light' ? '#000' : '#ddd'
    },
    CustomDropdown: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 100,


    }
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Speechify🔥</Text>
      </View>
      <CustomDropdown selectedValue={language} />




      <TextInputBox />

      <Pressable onPress={saveText} style={styles.saveBtn}>
        <Text style={styles.textCountText}>Save</Text>
      </Pressable>

    </ScrollView>
  );
};

export default TextToSpeech;
