//Zhanibek Orazbai 20MD0214
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, Alert } from "react-native";
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import Item from "./components/Item";
let DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    isChanged: false
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    isChanged: false
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    isChanged: false
  },
  {
    id:"1",
    title:"4 item",
    isChanged: false
  },
  {
    id:"2",
    title:"5 item",
    isChanged: false
  },
  {
    id:"3",
    title:"6 item",
    isChanged: false
  },
  {
    id:"4",
    title:"7 item",
    isChanged: false
  },
  {
    id:"5",
    title:"8 item",
    isChanged: false
  },
  {
    id:"6",
    title:"9 item",
    isChanged: false
  }
];

const App = () => {
  const [todos, setTodos] = useState(DATA)
  const deleteItem = id => setTodos([...todos].filter(item => item.id!==id))
  const addItem = todo => {
    !todo.title?Alert.alert('Error', 'Please enter text', [{text: 'OK'}]):setTodos([todo, ...todos])
  }
  const DOUBLE_PRESS_DELAY = 300;
  /**
  * Double Press recognition
  * @param {Event} e
  */
  var lastPress = 0
  const changeStyleTodo = id =>{
      const now = new Date().getTime();
      
      if (lastPress && (now - lastPress) < DOUBLE_PRESS_DELAY) {
      let updatedTodos = todos.map(todo=>{
          if (todo.id===id) {
              todo.isChanged = !todo.isChanged
          }
          return todo
      })
      setTodos(updatedTodos)
      }
      lastPress= now
  }
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        deleteItem={()=>deleteItem(item.id)}
        changeStyleTodo={()=>changeStyleTodo(item.id)}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <TodoForm addItem={addItem} />
      {
        todos.length>0?
        <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />:
      <Text style={styles.noItems} >No items</Text>
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItems: {
    padding: 16,
    color: '#555',
    textAlign: 'center'
  }
});

export default App;