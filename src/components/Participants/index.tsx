import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { participantStyles } from './styles';

type ParticipantProps = {
  id: number;
  name: string;
  onRemove: () => void;
}

export const Participant: React.FC<ParticipantProps> = ({
  id,
  name,
  onRemove
}) => {
  return (
    <View style={participantStyles.container}>
      <View style={participantStyles.textContainer}>
        <Text style={participantStyles.text}>{name}</Text>
      </View>
      <TouchableOpacity
        style={participantStyles.button}
        onPress={onRemove}
      >
        <Text style={participantStyles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}

