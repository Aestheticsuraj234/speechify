import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const TextInputBox = () => {
  const { text, setText, copyText, deleteText,convertTextToSpeech ,theme} = useContext(TextToSpeechContext);
  const styles = StyleSheet.create({
    textInputContainer: {
      width: '90%',
      marginHorizontal: 20,
      height: 300,
      backgroundColor: theme==='light'?'#fff':'#555',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 20,
      // elevation:10
    },
    textInput: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme==='light'?'#000':'#fff',
      padding: 10,
      width: '100%',
      height: '100%',
      flex: 1,
      paddingVertical: 8, // adjust the vertical padding to move the placeholder text down
      textAlignVertical: "top", // set the vertical alignment to top to prevent the text from being centered
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 72,
      padding: 10,
      width:'100%'
    },
    iconDelete: {
      width: 50,
      height: 50,
      backgroundColor: '#EDE51e',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconCopy: {
      width: 50,
      height: 50,
      backgroundColor: '#F52F83',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconSpeak:{
      width: 50,
      height: 50,
      backgroundColor: '#33C14A',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="What's Happening?"
        style={styles.textInput}
        numberOfLines={10}
        multiline
        value={text}
        onChangeText={setText}
        placeholderTextColor={theme==='light'?'#555':'#fff'}
      />
      <View style={styles.iconContainer}>
        <View style={styles.iconDelete}>
          <AntDesign name="delete" size={24} color="#fff" onPress={deleteText} />
        </View>
        <View style={styles.iconSpeak}>
        <Feather name="volume-2" size={24} color="#fff" onPress={convertTextToSpeech} />
        </View>
        <View style={styles.iconCopy}>
          <Feather name="copy" size={24} color="#fff" onPress={copyText} />
        </View>
      </View>
    </View>
  );
};

export default TextInputBox;

