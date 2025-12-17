import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  options: Option[]
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder = 'Seleccionar...',
  onChange
}) => {
  const [visible, setVisible] = useState(false)

  const selectedLabel = options.find(o => o.value === value)?.label

  return (
    <>
      {/* Input */}
      <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
        <Text style={styles.text}>
          {selectedLabel ?? placeholder}
        </Text>
      </TouchableOpacity>
      {/* Modal */}
      <Modal transparent animationType="fade" visible={visible}>
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.modal}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value)
                    setVisible(false)
                  }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: '#7300df',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  text: {
    color: '#333'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    maxHeight: 300
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
})

export default CustomSelect