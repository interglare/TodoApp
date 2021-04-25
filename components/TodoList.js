import React, {useState} from 'react'
import { View, Text, Alert, ScrollView } from 'react-native'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addItem = todo=>{
        if (!todo.text) {
            Alert.alert('Error', 'Please enter text', [{text: 'OK'}])
        }
        else {
            const newTodos = [todo, ...todos]
            setTodos(newTodos)

        }
    }

    const removeTodo=id=>{
        const removeArr = [...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
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
    return (
        <>
            <View>
                <TodoForm addItem={addItem} />
            </View>
            <ScrollView>
                <Todo 
                    todos={todos}
                    changeStyleTodo={changeStyleTodo}
                    removeTodo={removeTodo}
                />
            </ScrollView>
        </>
    )
}

export default TodoList
