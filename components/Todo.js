import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, View, Text, StyleSheet } from 'react-native'

function Todo({todos,changeStyleTodo,removeTodo}) {

    return todos.length>0? todos.map((todo,index)=>(
        <View
            key={index}
            style={todo.isChanged?styles.listItemViewChecked:styles.listItemView}
        >
            <TouchableOpacity 
                key={todo.id}
                onPress={()=>changeStyleTodo(todo.id)}
                style={styles.newItem}>
                <Text style={todo.isChanged?styles.listItemTextCheked:styles.listItemText} >
                    {todo.text}
                </Text>
            </TouchableOpacity>
            <View>
                <Button
                    color={'red'}
                    title={" - "}
                    onPress={()=>removeTodo(todo.id)}
                />
            </View>
        </View>
    )):<Text style={styles.listNoView} >there are no tasks here yet</Text>
}
const styles = StyleSheet.create({
    newItem:{
        width:'85%'
    },
    listItem: {
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 15,
        
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemViewChecked:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 15,
        
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor:'#ebebeb'
    },
    listItemText: {
        fontSize: 14,
        color:'black'
    },
    listItemTextCheked:{
        fontSize: 14,
        textDecorationLine: "line-through",
        color: 'gray'
    },
    listNoView: {
        padding: 15,
        alignContent: 'center',
    },
})

export default Todo
