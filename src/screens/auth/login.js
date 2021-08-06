import React, { useState, useEffect } from 'react'

import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Box, FormInput } from '../../components'
import { login } from '../../data'

export function LoginScreen({ navigation }) {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginApp = () => {
    login({ email: email, password: password })
      .then((response) => {
        var res = response.data
        if (res.success) {
          console.log(res)
        } else {
          console.log(response.data.errors)
        }
      })
      .catch((error) => {
       setError(error.response.data)
      })
  }

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
        {error !== null && (
          <View>
            <Text>{error.message}</Text>
            {error.errors.map((item,index) => (
              <Text key={index}>{item.msg}</Text>
            ))}
          </View>
        )}
        <FormInput
          label="Username"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <FormInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.navigateButton}>
          <Button title="Sign In" onPress={() => loginApp()} />
        </View>
        <View style={styles.navigateButton}>
          <Button
            color="gray"
            title="Create New Account"
            onPress={() => navigation.navigate('Register')}
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
