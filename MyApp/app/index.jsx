import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/menu" style={{ marginHorizontal: 'auto' }} asChild >
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>

        <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild >
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default index


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent:'center',
    // alignItems:'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(5px)',
    marginBottom: 150
  },
  button: {
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.75)',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    width: '50%',
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },


})