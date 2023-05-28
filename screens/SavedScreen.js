import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, ScrollView, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const SavedScreen = () => {
  const { deleteSavedText, savedText, convertSavedTextToSpeech, theme } = useContext(TextToSpeechContext);

  const styles = StyleSheet.create({
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
      color: theme==='light'?'#555':'#fff',
    },
    bottomNavigationView: {
      backgroundColor: theme === 'light' ? '#F7EAFF' : '#242334',
      width: '100%',
      height: '100%',
      color: theme==='light'?'#555':'#fff',
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
      color: theme==='light'?'#555':'#fff',
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
      backgroundColor: theme === 'light' ? '#F7EAFF' : '#242334',
      borderRadius: 10,
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
      borderColor: theme==='light'?'#555':'#fff',
    },
    emptySavedText: {
      fontSize: 18,
      fontWeight: '600',
      color: theme==='light'?'#555':'#fff',
    },
  })

  const SavedTextItem = ({ item }) => {
    return (
      <ScrollView>
        <View style={styles.bottomNavigationViewItem}>
          <View style={styles.bottomContentContainer}>
            <Text style={styles.bottomContainerText}>{item.text}</Text>
            <View style={styles.bottomContainerIconContainer}>
              <AntDesign
                name="delete"
                size={24}
                color={theme==='light'?"#555":"white"}
                onPress={() => deleteSavedText(item)}
              />
              <AntDesign
                name="play"
                size={24}
                color={theme==='light'?"#555":"white"}
                onPress={() => convertSavedTextToSpeech(item)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Saved Texts💬</Text>
      </View>
      <View style={styles.bottomNavigationView}>
        {savedText.length === 0 ? (
          <View style={styles.emptySavedTextContainer}>
            <Text style={styles.emptySavedText}>No Saved Text Yet 😣</Text>
          </View>
        ) : (
          <FlatList
            data={savedText}
            renderItem={({ item }) => <SavedTextItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default SavedScreen;

