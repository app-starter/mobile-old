import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Go to Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('App')}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
