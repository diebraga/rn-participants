import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { homeStyles } from './styles'
import { Participant } from '../../components/Participants';

const participantsList = [
  { id: 1, name: "Diego Braga" },
]

export const Home: React.FC = () => {
  const [participants, setParticipants] = useState<typeof participantsList>([])
  const [participantName, setParticipantName] = useState("")

  const handleRemoveParticipant = (name: string, id: number): void => {
    return Alert.alert("Delete", `Are you you want to delete ${name}?`, [
      {
        text: "Yes", onPress: () => {
          alert(`${name} deleted.`)
          return setParticipants(participants.filter(participant => participant.id !== id))
        }
      },
      { text: "No", style: "cancel" }
    ])
  }

  const handleAddNewParticipant = () => {
    const newParticipant: typeof participantsList[0] = {
      id: participants.length + 1,
      name: participantName
    }
    if (!participants.some(participant => participant.name === participantName)) {
      setParticipants(prev => [...prev, newParticipant])
    } else {
      alert("Participant already exists")
    }
    setParticipantName("")
  }

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
            onChangeText={(text) => setParticipantName(text)}
            value={participantName}
          />
          <TouchableOpacity
            style={homeStyles.button}
            onPress={handleAddNewParticipant}
          >
            <Text style={homeStyles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "70%" }}>
          <FlatList
            data={participants}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={() =>
              <Text style={homeStyles.emptyText}>You don't have anybody listed in your event.</Text>
            }
            renderItem={({ item }) => <Participant
              id={item.id}
              key={item.id}
              name={item.name}
              onRemove={() => handleRemoveParticipant(item.name, item.id)}
            />
            }
          />
        </View>
      </View>
    </View>
  )
}