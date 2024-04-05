// // import { View, Text } from 'react-native'
// // import React from 'react'

// // const header = () => {
// //   return (
// //     <View style={styles.header}>
// //       <Text>Todo list</Text>
// //     </View>
// //   )
// // }

// // export default header

// // const styles = StyleSheet.create({
// //     header: {
// //         backgroundColor: '#000097',
// //         weight: 10,
// //         margin: 10,
// //         fontSize: 25,
// //         fontColor: '#ffffff',
// //         fontWeight: 'bold',
// //         textAlign: 'center'
// //     }
// // });

// import React from 'react';
// import { View, Text, TouchableOpacity, Icon } from 'react-native';

// const Header = () => {
//   return (
//     <View style={{
//       backgroundColor: '#FFA15E',
//       height: 60,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 10,
//     }}>
//       <Text style={{
//         fontSize: 20,
//         color: '#000',
//       }}>Список задач</Text>
//       <Text style={{
//         fontSize: 15,
//         color: '#000',
//       }}>Добавьте свою задачу снизу</Text>
//       <TouchableOpacity style={{
//         position: 'absolute',
//         right: 10,
//       }}>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Header;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Task List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;

