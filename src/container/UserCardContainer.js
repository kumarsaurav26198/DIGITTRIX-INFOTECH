import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { addItemToCart } from './../redux/actions/cartAction';
import { fetchApiData } from '../redux/actions/userAction';
import { getUserLists } from '../services/UserList';


import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";

const UserCardContainer = () => {
  const [ user, setUser ] = useState([]);

  const userList = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(() => {

    setUser(
      dispatch(fetchApiData())

    );
  }, []);

  if (!user)
  {
    return <Text>Loading...</Text>;
  }
  const renderItem = ({ item: user }) => (


    <UserCard
      {...user}
      onAddToCart={x => {
        dispatch(addItemToCart(user));
      }}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        data={userList.data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
        numColumns={1}
      />
    </View>
  );
};

export default UserCardContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    paddingBottom: 150,
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
