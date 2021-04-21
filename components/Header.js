import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header =({title}) => {
  return (
    <View style={styles.header} >
      <Text style={styles.text} >{title}</Text>
    </View>  
  )
}

Header.defaultProps ={  
    title: "Todo App"
}

const styles =StyleSheet.create({
    header :{
        height: 60,
        padding: 12,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#aaa'
    },
    text:{
        color: "#000",
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '100'
    }
})

export default Header;