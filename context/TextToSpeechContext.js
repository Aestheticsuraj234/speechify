import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import React, { useState, createContext, useEffect } from 'react';

export const TextToSpeechContext = createContext();

export const TextToSpeechProvider = ({ children }) => {
  // State Variables
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-us-x-sfg-network');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.7);
  const [volume, setVolume] = useState(1);
  const [saved, setSaved] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [savedText, setSavedText] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    listAllVoiceOptions();
    loadSavedText();
  }, []);

  // Function to list all available voice options
  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Copy the TextInput data to the clipboard
  const copyText = async () => {
    if (!text) {
      alert('Please enter text to copy');
      return;
    }
    await Clipboard.setStringAsync(text);
    alert('Copied');
  };

  // Delete the TextInput data
  const deleteText = () => {
    if (!text) {
      alert('Please enter text to delete');
      return;
    }
    setText('');
  };

  // Convert text to speech
  const convertTextToSpeech = () => {
    if (!text) {
      alert('Please enter a text to convert to speech!');
      return;
    }

    Speech.speak(text, {
      voice: language,
      pitch: pitch,
      rate: rate,
    });
  };

  const handleSpeedChange = (value) => {
    // Reverse the calculation
    const reversedRate = 2.25 - value;
    setRate(reversedRate);
  };
  
  
  // Handle pitch change
  const handlePitchChange = (value) => {
  
    setPitch(value);
  };

  // Handle volume change
  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  // Handle language change
  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  // Save the text
  const saveText = async () => {
    if (!text) {
      alert('Please enter text to save');
      return;
    }

    const newText = { text, language, pitch, rate };
    const newSavedText = [...savedText, newText];

    try {
      setSavedText(newSavedText);
      setSavedCount(newSavedText.length);
      setSaved(true);
      await AsyncStorage.setItem('@text', JSON.stringify(newSavedText));
    } catch (e) {
      console.log(e);
    }
  };

  // Load saved text from AsyncStorage
  const loadSavedText = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@text');
      const data = JSON.parse(jsonValue);
      console.log('data:', data);

      if (data && data.length > 0) {
        setSavedText(data);
        setSavedCount(data.length);

        const lastSavedText = data[data.length - 1];
        setText(lastSavedText.text || '');
        setLanguage(lastSavedText.language);
        setPitch(lastSavedText.pitch || 1);
        setRate(lastSavedText.rate || 0.75);
        setSaved(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Delete saved text
  const deleteSavedText = async (item) => {
    try {
      const updatedSavedText = savedText.filter(
        (textItem) => textItem !== item
      );
      setSavedText(updatedSavedText);
      setSavedCount(updatedSavedText.length);
      setSaved(false);
      await AsyncStorage.setItem('@text', JSON.stringify(updatedSavedText));
    } catch (e) {
      console.log(e);
    }
  };

  // Convert saved text to speech
  const convertSavedTextToSpeech = (item) => {
    const options = {
      voice: item.language,
      pitch: item.pitch,
      rate: item.rate,
      volume: item.volume,
    };

    Speech.speak(item.text, options);
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
        handleLanguageChange,
      }}
    >
      {children}
    </TextToSpeechContext.Provider>
  );
};
