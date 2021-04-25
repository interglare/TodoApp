import React from 'react'
import { TouchableOpacity, Text, Button, StyleSheet } from 'react-native'

const Item = ({ item, deleteItem, changeStyleTodo }) => (
    <TouchableOpacity
        onPress={() => changeStyleTodo(item.id)} 
        style={[styles.item, item.isChanged && styles.changedItem]}>

        <Text style={[styles.title, item.isChanged && styles.changedTitle]}>{item.title}</Text>
        <TouchableOpacity 
            onPress={() => deleteItem(item.id)}
            style={styles.btn} >
            <Text style={styles.btnText} > - </Text>
        </TouchableOpacity>

    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    title: {
        fontSize: 16,
        color: '#555',
        width: '85%'
    },
    changedItem: {
        backgroundColor: '#e2e2e2'
    },
    changedTitle: {
        color: '#aaa',
        textDecorationLine: 'line-through'
    },
    btn: {
        width:34,
        height:34,
        backgroundColor: 'red',
        borderRadius:17
    },
    btnText: {
        textAlign:'center',
        color:'white',
        lineHeight:32,
        fontSize:32
    }
})

export default Item