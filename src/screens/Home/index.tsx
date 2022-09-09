import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { homeStyles } from './styles'
import { Participant } from '../../components/Participants';

type Participants = {
  id: number;
  name: string;
}

const participantsList = [
  { id: 1, name: "Diego Braga" },
  { id: 2, name: "Matteo Palazzolo" },
  { id: 3, name: "Aine Lawless" },
  { id: 4, name: "Vicente West" },
  { id: 5, name: "Daniel Burke" },
  { id: 6, name: "Quinton Mendoza" },
  { id: 7, name: "Logan Bonilla" },
  { id: 8, name: "Aedan Weiss" },
  { id: 9, name: "Benjamin Gregory" },
  { id: 10, name: "Karly Kelly" },
  { id: 11, name: "Sandra Foley" },
  { id: 12, name: "German Lara" },
  { id: 13, name: "Brylee Ortiz" },
  { id: 14, name: "Kyson Zimmerman" },
]

export const Home: React.FC = () => {
  const [participants, setParticipants] = useState<Participants[]>(participantsList)
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
              onRemove={() => alert("Delete")}
            />
            }
          />
        </View>
      </View>
    </View>
  )
}