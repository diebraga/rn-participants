import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { homeStyles } from './styles'
import { Participant } from '../../components/Participants';

type Participants = {
  id: number;
  name: string;
}

export const Home: React.FC = () => {
  const [participants, setParticipants] = useState<Participants[]>([])
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.layoutView}>
        <Text style={homeStyles.headingText}>Event Name</Text>
        <Text style={homeStyles.headingHelperText}>
          Friday, 4 November 2022
        </Text>
        <View style={homeStyles.form}>
          <TextInput
            style={homeStyles.input}
            placeholder="Add new participant"
            placeholderTextColor="#6b6b6b6b"
          />
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => { }}
          >
            <Text style={homeStyles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <Participant />
        <Participant />
        <Participant />
      </View>
    </View>
  )
}