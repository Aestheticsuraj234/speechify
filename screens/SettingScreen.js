import {  StyleSheet, Text, View, StatusBar, Pressable, FlatList, ScrollView,TouchableOpacity } from 'react-native';
import ControlBox from '../components/ControlBox';
import { TextToSpeechContext } from '../context/TextToSpeechContext';
import { useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const TextToSpeech = () => {
  const {  theme,
    toggleTheme } = useContext(TextToSpeechContext);
    const styles = StyleSheet.create({
      toggleButton:{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
      },
      container: {
        flex: 1,
        backgroundColor: theme === 'light' ? '#F7EAFF' : '#242334',
        marginTop: StatusBar.currentHeight,
      },
      headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme === 'light' ? '#55545F' : '#FFF',
      },
      saveBtn: {
        width: '90%',
        height: 50,
        backgroundColor: theme === 'light' ? '#CD70F9' : '#FFD700',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
      },
      
      text: {
        color:  '#FFF',
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
        color: theme === 'light' ? '#242334' : '#FFF',
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
        color: theme === 'light' ? '#242334' : '#FFF',
      },
      textCountText:{
        fontSize: 18,
        fontWeight: '600',
        color:  '#FFF',
      }
    })
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>General Settings🔥</Text>
      </View>
      <ControlBox/>
  
      {/* DarkMode Toggle Button */}
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
    {theme==='light'?(<Entypo name="moon" size={24} color="#55545F" />):(<Feather name="sun" size={24} color="#ffd700" />)}
  </TouchableOpacity>
   
    </ScrollView>
  );
};

export default TextToSpeech;

