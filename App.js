// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';
// import Header from './blocks/header';
// import AddTask from './blocks/newTask';
// import { Text } from 'react-native';


// const App = () => {
//   const [tasks, setTasks] = useState([]); // State to store tasks

//   const handleAddTask = (newTask) => {
//     // Add logic to handle adding a new task (e.g., persist to storage)
//     setTasks([...tasks, newTask]); // Update state with new task
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <AddTask onAddTask={handleAddTask} />
//       <FlatList
//         data={tasks} // Pass the tasks array as data
//         renderItem={({ item }) => ( // Function to render each task
//           <View key={item.id}> {/* Ensure each task has a unique key */}
//             <Text>{item.text}</Text> {/* Display the task text within a Text component */}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default App;

import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './blocks/list';
import Form from './blocks/newTask';
import Header from './blocks/header';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', task: 'Task 1' },
    { id: '2', task: 'Task 2' },
    { id: '3', task: 'Task 3' },
    { id: '4', task: 'Task 4' }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Math.random().toString(), task: newTask }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View>
      <Header />
      <Form onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem task={item} onDelete={deleteTask} />
        )}
      />
    </View>
  );
};

export default App;
