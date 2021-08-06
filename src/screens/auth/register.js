import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Box, FormInput } from '../../components'

export function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 50,
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          App Starter
        </Text>
        <FormInput label="Username" />
        <FormInput label="Email" />
        <FormInput label="Password" />
        <FormInput label="Confirm Password" />
       
        <View style={styles.navigateButton}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('App')}
          />
        </View>
        <View style={styles.navigateButton}>
          <Button
            color="gray"
            title="I Have a account"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  container: {
    margin: 5
  },
  navigateButton: {
    margin: 5
  }
})
