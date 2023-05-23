import { StyleSheet, View, Button, Text } from "react-native";
import React from "react";
import UserCardContainer from "../../../container/UserCardContainer";
import CustomButton from "../../../components/CustomButton";

const Home = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          width: 120,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
          marginRight: 15,
          marginVertical: 10,
        }}
      >
        <Button
          onPress={() => {
            navigation.navigate("Cart");
          }}
          title=" Go to Cart "
          color="#00cc00"
        />
      </View>
      <UserCardContainer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
