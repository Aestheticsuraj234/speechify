import React, { useState, useContext } from 'react';
import { TextToSpeechContext } from '../context/TextToSpeechContext';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CustomDropdown = ({ selectedValue }) => {
  const { handleLanguageChange, theme } = useContext(TextToSpeechContext);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: 'English (USA)', value: 'en-US', flag: require('../assets/USA_FLAG.png') },
    { label: 'English (UK)', value: 'en-AU', flag: require('../assets/BRITISH_FLAG.png') },
    { label: 'English (IN)', value: 'en-IN', flag: require('../assets/INDIAN_FLAG.png') },
    // Add more language options as needed
  ];

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionPress = (value) => {
    setIsOpen(false);
    handleLanguageChange(value);
  };

  const styles = StyleSheet.create({
    dropdownContainer: {
      width: '25%',
      position: 'relative',
      zIndex: 99,
    },
    dropdownButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme === 'light' ? '#F7EAFF' : '#242334',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      borderTopStartRadius:0,
      borderBottomLeftRadius:0,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
    },
    flagIcon: {
      width: 55,
      height: 55,
      marginRight: 10,
      aspectRatio: 16 / 9,
      borderRadius: 4,
    },
    dropdownButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme === 'light' ? '#000' : '#ddd',
    },
    dropdownOptions: {
      position: 'absolute',
      top: '90%',
      left: 0,
      right: 0,
      backgroundColor: theme === 'light' ? '#F7EAFF' : '#242334',
      borderRadius: 4,
      marginTop: 10,
      maxHeight: 150,
      overflow: 'scroll',
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
    },
    dropdownOption: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    dropdownOptionText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme === 'light' ? '#000' : '#ddd',
    },
  });

  // Include selectedValue as the default option
  const defaultOption = options.find((option) => option.value === selectedValue) || {
    label: '',
    value: selectedValue,
    flag: require('../assets/INDIAN_FLAG.png'), // Replace with the path to your default flag image
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={handleDropdownToggle} style={styles.dropdownButton}>
        {defaultOption && (
          <>
            <Image source={defaultOption.flag} style={styles.flagIcon} />
            {/* <Text style={styles.dropdownButtonText}>{defaultOption.label}</Text> */}
          </>
        )}
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.dropdownOption}
              onPress={() => handleOptionPress(option.value)}
            >
              <Image source={option.flag} style={styles.flagIcon} />
              {/* <Text style={styles.dropdownOptionText}>{option.label}</Text> */}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;
