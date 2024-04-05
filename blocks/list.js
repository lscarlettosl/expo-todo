// import { View, Text } from 'react-native'
// import React from 'react'
// import { useState } from 'react'
// import { FlatList } from 'react-native'

// const List = () => {
//     const [items, setItems] = useState([]);
//     const [text, setText] = useState('')};
  
//     const handleAdd = () => {
//       setItems([...items, { id: Date.now(), text }]);
//       setText('');
//     };
  
//     const handleToggle = (id) => {
//       setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
//     };

//     return (
//     <View>
//       <Text></Text>
//     </View>
//   )


// export default list

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListItem = ({ task, onDelete }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.taskText}>{task.task}</Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} style={styles.deleteButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
    flex: 1, // Make the task text take up most of the space
  },
  deleteButton: {
    backgroundColor: '#f00', // Adjust color as needed (e.g., red)
    color: '#fff', // White text
    borderRadius: 5, // Rounded corners for a 
  },
});

export default ListItem;
