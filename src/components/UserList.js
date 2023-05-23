import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
      ];

      const renderItem = ({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      );
  return (
    <View>
    {/* Use FlatList to render the user list */}
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
  )
}

export default UserList

const styles = StyleSheet.create({})