import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CartList from "../components/CartList";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/actions/cartAction";

const CartListContainer = ({ item }) => {
  const dispatch = useDispatch();



  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems, "cartItems");
  const [ cartItemsData, setCartItemsData ] = useState([]);

  useEffect(() => {
    const uniqueAges = [ ...new Set(cartItems) ];
    setCartItemsData(uniqueAges);

  }, [ cartItems ]);

  if (!cartItems)
  {
    return <Text>Loading......</Text>;
  }
  const renderItem = ({ item: user }) => (


    <CartList
      {...user}
      removeFromCart={x => {
        dispatch(removeItemFromCart(user.id));
      }}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItemsData}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default CartListContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
