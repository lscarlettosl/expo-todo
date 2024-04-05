// // import { useState } from "react";
// // import { View, Text, TextInput, TouchableOpacity, ViewComponent } from "react-native";

// // const AddTask = ({ onAddTask }) => {
// //   const [task, setTask] = useState('');

// //   const handleAddTask = () => {
// //     onAddTask(task);
// //     setTask('');
// //   };

// //   return (
// //     <View style={{
// //       backgroundColor: '#fff',
// //       height: 50,
// //       borderRadius: 10,
// //       padding: 10,
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //     }}>
// //       <TextInput
// //         style={{
// //           flex: 1,
// //           fontSize: 16,
// //           color: '#000',
// //           borderWidth: 1,
// //           borderColor: 'black',
// //           padding: 10,
// //           marginHorizontal: 10,
// //         }}
// //         placeholder="Введите новую задачу"
// //         value={task}
// //         onChangeText={setTask}
// //       />
// //       <TouchableOpacity
// //         style={{
// //           backgroundColor: '#000',
// //           borderRadius: 5,
// //           padding: 10,
// //           marginLeft: 10,
// //         }}
// //         onPress={handleAddTask}
// //       >
// //         <Text style={{ color: '#fff' }} onChangeText={onChange}>Добавить задачу</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// import React, { useState } from "react";
// import { StyleSheet, TextInput, View } from 'react-native';

// export default function Forms({}) {
//   const [text,setValue]=useState('');

//   const onChange=(text)=>{
//     setValue(text);
//   };

// return (
//   <View>
//     <TextInput style={StyleSheet.input} onChangeText={onChange} placeholder="Сделайте запись"/>
//   </View>
// );
// }

// const styles = StyleSheet.create({
//   input: (
//     borderBottomWidth: 5,
//     padding: 20,
//     marginVertical: 20,
//     marginHorizontal: '25%',
//     width: '50%'
//   )
// });

// export default AddTask;

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Form = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a new task"
        value={newTask}
        onChangeText={text => setNewTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

export default Form;
