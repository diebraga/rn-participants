import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { participantStyles } from './styles';

export const Participant: React.FC = () => {
  return (
    <View style={participantStyles.container}>
      <View style={participantStyles.textContainer}>
        <Text style={participantStyles.text}>Diego Braga</Text>
      </View>
      <TouchableOpacity
        style={participantStyles.button}
        onPress={() => { }}
      >
        <Text style={participantStyles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}

