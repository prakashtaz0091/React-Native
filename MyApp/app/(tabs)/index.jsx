import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import icedCoffeeImage from "@/assets/images/iced-coffee.png";

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
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
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(5px)'
  },


})