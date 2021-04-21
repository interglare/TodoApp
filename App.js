//Zhanibek Orazbai 20MD0214
import React from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import TodoList from './components/TodoList';

export default function App (){

  return (
    <View >
      <Header />
      <TodoList/>
    </View>
  )
}