import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Ourtodo from './components/Ourtodo';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handlesubmit = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const myTask = (index) => {
    let sameitem = [...taskItems];
    sameitem.splice(index, 1);
    setTaskItems(sameitem)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={{ paddingTop: 70,paddingHorizontal: 18,}}>
        <Text style={{ fontSize: 25,fontWeight: 'bold'}}>Our Todolist</Text>
        <View style={{ marginTop: 30}}> 
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => myTask(index)}>
                  <Ourtodo text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>  
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.todolistcontain}
      >
        <TextInput style={styles.input} placeholder={'Write here'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handlesubmit()}>
          <View style={{width: 58,
              height: 58,
              backgroundColor: '#ffffff',
              borderRadius: 55,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#d9d9d9',
              borderWidth: 1}}>
            <Text style={{fontSize:14}}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  todolistcontain: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 13,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    width: 250,
  },
});