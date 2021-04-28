import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
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
