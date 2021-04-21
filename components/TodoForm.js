import React, {useState,useEffect,useRef} from 'react'
import { View, TextInput,TouchableOpacity, Text, StyleSheet } from 'react-native'

const TodoForm=({addItem})=> {
  const [text, setText] = useState('')
  const onChange=text=>setText(text)
  let txtInput = React.createRef();
  const handleSubmit=()=>{
    addItem({
      id:Math.floor(Math.random()*10000),
      text:text,
      isChanged: false
    })
    txtInput.current.clear();
    setText('')
  }
  return (
    <View>
        <TextInput
            placeholder={"Add task"}
            onChangeText ={onChange}   
            style={styles.input} 
            ref={txtInput}
            autoFocus={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit} >
              <Text style={styles.btnText}> + Add Task</Text>
          </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
      padding: 8,
      fontSize: 16,
      borderColor: "#9b00fa",
      borderWidth: 2,
      margin: 10,
      borderRadius: 4
  },
  button:{
      backgroundColor: "#9b00fa",
      padding: 8,
      margin: 10,
      borderRadius: 4
  },
  btnText:{
      color: '#fff',
      fontSize: 18,
      textAlign: 'center'
  }
})

export default TodoForm
