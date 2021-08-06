import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { Box } from './box'

export function FormInput(props) {
  return (
    <View style={styles.inputContainer}>
      <Text>{props.label}</Text>
      <TextInput style={styles.input} value={props.value} onChangeText={props.onChangeText}/>
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    margin: 5
  },
  input: {
    borderColor: 'black',
    borderWidth: 1
  }
})
