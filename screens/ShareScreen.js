import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, Image, Pressable ,Share} from 'react-native';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const ShareScreen = () => {
    const url = 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US'
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            ('TextToSpeech | A App That\'s Speak'+ '\n'+ url )
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
    const {  theme } = useContext(TextToSpeechContext);

    const styles = StyleSheet.create({
        shareButton: {
            width: '90%',
            height: 50,
            backgroundColor: theme==='light'?'#CD70F9':'#FFD700',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            marginVertical: 20,
            shadowColor: '#cdf',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 2,
            elevation: 10,
        },
    
        btnText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            marginVertical: 10,
            marginHorizontal: 10,
            textAlign: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
        },
        banner: {
            marginTop: 40,
            height: 320,
            width: 320,
        },
        container: {
            flex: 1,
            backgroundColor: theme==='light'?'#F7EAFF':'#242334',
            marginTop: StatusBar.currentHeight,
        },
        headerContainer: {
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
    
        },
        headerText: {
            margin: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: theme==='light'?'#555':'#fff',
        },
        saveBtn: {
            width: '90%',
            height: 50,
            backgroundColor: '#CD70F9',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
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
        }
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Let's Spread this To The World🌍</Text>

                <Image
                    source={theme==='light'?(require('../assets/Sharing.png')):(require('../assets/ShareBanner.png'))}
                    height={100}
                    style={styles.banner}
                    width={100}
                />
                <Pressable style={styles.shareButton} onPress={onShare}>
                    <Text style={styles.btnText}>Share</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default ShareScreen;

