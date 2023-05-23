import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';

const CartList = ({ id, first_name, last_name, email, avatar, removeFromCart }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.id}>{`${ "#00" }` + id}</Text>
                <Text style={styles.name}>
                    {first_name} {last_name}
                </Text>
                <Text style={styles.name}>{email}</Text>

            </View>
            <View>
                <TouchableOpacity style={{ height: 24, width: 24, left: 75, top: -10 }} onPress={removeFromCart}>
                    <Image source={require("../assets/images/redHeart.png")} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <View style={{ right: 10, bottom: 18 }}>
                    <Image source={{ uri: avatar }} style={{ height: 100, width: 100, borderRadius: 20 }} />
                </View>
            </View>
        </View>
    );
};

export default CartList;

const styles = StyleSheet.create({
    container: {
        height: 140,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#71CEB1",
        elevation: 8
    },
    id: {
        marginTop: 5,
        fontWeight: "500",
        color: 'gray'
    },
    name: {
        fontWeight: "500",
        fontSize: 20,
        color: "white"
    },
    typeWrapper: {
        width: 62,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    attackWrapper: {
        width: 69,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
    },
});