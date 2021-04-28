import React from 'react'
import { Button, SafeAreaView, StyleSheet, View } from 'react-native'

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Go To Login"
          onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
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
