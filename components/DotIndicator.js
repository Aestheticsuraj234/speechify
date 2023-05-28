import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const DotIndicator = () => {
    const { savedCount } = useContext(TextToSpeechContext);
    return (
        <>
          { savedCount > 0 &&(<View style={styles.dotIndicator}><Text style={styles.dotText}>{savedCount}</Text></View>)
            }
        </>
    );
};

export default DotIndicator

const styles = StyleSheet.create({
    dotIndicator: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        width: 14,
        height: 14,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotText: {
        color: '#FFF',
        fontSize: 8,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
});
