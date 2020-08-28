import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Modal} from 'react-native';

export default function GoalInput(props) {
    const [enteredGoal, setEnteresGoal] = useState('');
    function goalInputHandler (enteredText){
        setEnteresGoal(enteredText); 
      }
    const addGoalHandler = () =>{
        props.onAddGoal(enteredGoal);
        setEnteresGoal('');
    }
    return (
      <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}> 
        <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler}/>
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
      </View>
      <View style={styles.button}>
        <Button title="ADD" onPress={addGoalHandler}/>
        </View>
      </View>
      </View>
      </Modal>
    )
}

const styles= StyleSheet.create({
    inputContainer:{ 
        flex:1,
        justifyContent:'center', 
        alignItems: 'center'
      },
      input:{
        width:'80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'60%'
      },
      button:{
        width:'40%'
      }
})
