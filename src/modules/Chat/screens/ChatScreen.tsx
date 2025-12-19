import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Header } from 'react-native-library-app-bank'
import { getMessages, saveMessages } from '../utils/chatCache';
import { useEffect, useState } from 'react';
import { Message } from '../utils/chatCache';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages(getMessages());
  }, []);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      createdAt: Date.now(),
    };

    const updated = [...messages, newMessage];
    setMessages(updated);
    saveMessages(updated);
  };

  const [messageText, setMessageText] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <Header title="Chatea con Robotin" />
      <ScrollView style={styles.messagesContainer}>
        {
          messages.map((message) => (
            <View key={message.id} style={{ marginBottom: 10, alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start', backgroundColor: message.sender === 'user' ? '#7300df' : '#e0e0e0', padding: 10, borderRadius: 5, maxWidth: '80%' }}>
              <Text style={{ color: message.sender === 'user' ? '#fff' : '#000' }}>{message.text}</Text>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.InputContainer}>
        <TextInput
        value={messageText}
        style={styles.input}
        placeholder="Escribe un mensaje..."
        onChangeText={(text) => setMessageText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => {
          sendMessage(messageText);
          setMessageText('');
        }}>
          <FontAwesome6 name="paper-plane" size={20} color="#fff" iconStyle="solid" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0'
  },
  InputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    columnGap: 5,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0'
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: 70,
    height: 40,
    backgroundColor: '#7300df',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
  }
})

export default ChatScreen