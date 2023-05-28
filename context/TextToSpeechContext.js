import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import React,{ useState, createContext, useEffect } from 'react';


export const TextToSpeechContext = createContext();

export const TextToSpeechProvider = ({ children }) => {
  // State Variables
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-IN-language');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.75);
  const [volume, setVolume] = useState(1);
  const [saved, setSaved] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [savedText, setSavedText] = useState([]);
  const [theme, setTheme] = useState('light');

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  useEffect(()=>{listAllVoiceOptions()},[]);

  // Functions

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Write a function to copy the TextInput data to the clipboard
  const copyText = async () => {
    if (!text) {
      alert('Please enter text to copy');
      return;
    }
    await Clipboard.setStringAsync(text);
    alert('Copied');
  };

  // Write a function to delete the TextInput data
  const deleteText = () => {
    if (!text) {
      alert('Please enter text to delete');
      return;
    }
    setText('');
  };

  // Write a function to convert text to speech
  const convertTextToSpeech = async () => {
    // Checking if the text is empty
    if (text === '') {
      alert('Please enter a text to convert to speech!');
    } else {
      Speech.speak(text, {
        voice: language,
        pitch: pitch,
        rate: rate,
        // volume: volume,
      });
    }
  };

  // Function to handle the speed change
  const handleSpeedChange = (value) => {
    setRate(value);
  };

  // Function to handle the Pitch
  const handlePitchChange = (value) => {
    setPitch(value);
  };

  // Function to handle Volume
  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  // Function to handle the language change
  const handleLanguageChange = (value) => {
    setLanguage(value);
  }

  const saveText = async () => {
    try {
      const newText = { text, language, pitch, rate };
      const newSavedText = [...savedText, newText];
      setSavedText(newSavedText);
      setSavedCount(newSavedText.length);
      setSaved(true);
      await AsyncStorage.setItem('@text', JSON.stringify(newSavedText));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const loadSavedText = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@text');
        const data = JSON.parse(jsonValue);
        console.log("data:",data)
        if (data && data.length > 0) {
          setSavedText(data);
          setSavedCount(data.length);
          // Retrieve the last saved text object
          const lastSavedText = data[data.length - 1];
          setText(lastSavedText.text || ''); // Set the text state, or an empty string if not available
          setLanguage(lastSavedText.language || 'en-US'); // Set the language state, or a default value if not available
          setPitch(lastSavedText.pitch || 1); // Set the pitch state, or a default value if not available
          setRate(lastSavedText.rate || 0.75); // Set the rate state, or a default value if not available
          setSaved(true); // Set the saved state to true
        }
      } catch (e) {
        console.log(e);
      }
    };

    loadSavedText();
  }, []);

  const deleteSavedText = async (item) => {
    try {
      const updatedSavedText = savedText.filter((textItem) => textItem !== item);
      setSavedText(updatedSavedText);
      setSavedCount(updatedSavedText.length);
      setSaved(false);
      await AsyncStorage.setItem('@text', JSON.stringify(updatedSavedText));
    } catch (e) {
      console.log(e);
    }
  };



  const convertSavedTextToSpeech = async (item) => {
    if (Platform.OS === 'ios') {
      Speech.speak(item.text, {
        voice: item.language,
        pitch: item.pitch,
        rate: item.rate,
        volume: item.volume,
      });
    } else {
      Speech.speak(item.text, {
        voice: item.language,
        pitch: item.pitch,
        rate: item.rate,
        volume: item.volume,
      });
    }
  };

  return (
    <TextToSpeechContext.Provider
      value={{
        text,
        setText,
        copyText,
        deleteText,
        convertTextToSpeech,
        handlePitchChange,
        handleSpeedChange,
        handleVolumeChange,
        rate,
        pitch,
        language,
        saveText,
        deleteSavedText,
        savedCount,
        savedText,
        convertSavedTextToSpeech,
        theme,
        toggleTheme,
        handleLanguageChange
      }}
    >
      {children}
    </TextToSpeechContext.Provider>
  );
};
