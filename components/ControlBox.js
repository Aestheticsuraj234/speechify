import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { TextToSpeechContext } from '../context/TextToSpeechContext';


const ControlBox = () => {
  const {
    handlePitchChange,
    handleSpeedChange,
    rate,
    pitch,
    theme,
    toggleTheme
  } = useContext(TextToSpeechContext);


  const getPitchLabel = () => {
    if (pitch < 1.25) {
      return 'Normal';
    } else if (pitch < 1.5) {
      return 'Very-Low';
    } else if (pitch < 1.75) {
      return 'Low';
    } else {
      return 'High';
    }
  };


  // getSpeedLabel
const getSpeedLabel = ()=>{
  if (rate < 0.5) {
    return 'Very Low';
  } else if (rate < 1) {
    return 'Normal';
  } else if (rate < 1.75) {
    return 'high';
  } else {
    return 'Very-high';
  }
}


const styles = StyleSheet.create({
  voiceControllerContainer: {
    width: '90%',
    marginHorizontal: 20,
    height: 250,
    backgroundColor: theme==='light'?'#fff':'#55545F' ,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:10,
    marginTop: 20,
  },
  voiceControllerHeader: {
    width: '100%',
    height: 62,
    borderRadius: 10,
    justifyContent: 'center',
    gap:25,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',

  },
  tinyLogo: {
    width: 45,
    height: 45,
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  languageSelector: {
    flexDirection: 'row',
    width: '60%',
    height: 50,
    backgroundColor: '#F52F83',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
  },
  languageText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  speakerIcon: {
    height: 30,
    width: 30,
  },
  voiceControllerBody: {
    width: '90%',
    marginHorizontal: 20,
    height: 160,
    backgroundColor: theme==='light'?'#BE8CFF':'#39393F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    elevation:10,
    marginBottom: 28,
  },
  voiceControllerElements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  voiceControllerElementsText: {
    paddingHorizontal:10,
    paddingVertical:10,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  slider: {
    width: 200,
    height: 40,
  },
});

  return (
    <View style={styles.voiceControllerContainer}>
      <View style={styles.voiceControllerBody}>
        <View style={styles.voiceControllerElements}>
          <Text style={styles.voiceControllerElementsText}>Speed: <Text style={{color:'#eee',fontSize:10}}>{getSpeedLabel()}</Text></Text>
          <Slider
            style={styles.slider}
            minimumValue={0.25}
            maximumValue={2}
            value={rate}
            onValueChange={handleSpeedChange}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#EDE51e"
          />
        </View>
        <View style={styles.voiceControllerElements}>
          <Text style={styles.voiceControllerElementsText}>Pitch: <Text style={{color:'#eee',fontSize:10}}>{getPitchLabel()}</Text></Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={2}
            value={pitch}
            onValueChange={handlePitchChange}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#F52F83"
          />
        </View>
      </View>
    </View>
  );
};

export default ControlBox;
