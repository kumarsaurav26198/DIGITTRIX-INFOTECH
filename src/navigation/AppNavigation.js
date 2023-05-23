import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import SignIn from '../screens/before/signIn/SignIn';
import SignUp from '../screens/before/signUp/SignUp';
import Home from '../screens/after/home/Home';
import Cart from '../screens/after/cart/Cart';
import PaginationExample from '../screens/after/pagination/PaginationExample';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#00cc00' },
                gestureEnabled: true,

            }}>
                <Stack.Screen name="SignIn" component={SignIn} options={{
                    headerTitle: (props) => (<></>),
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title=" skip "
                            color="#00cc00"
                        />
                    ),
                    headerShown: true,
                    // title: 'Awesome app',
                }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{
                    headerShown: true, headerTitle: (props) => (<></>),
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title=" skip "
                            color="#00cc00"
                        />
                    ),
                    headerShown: true,
                }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: true,
                    title: 'Home',

                    // headerRight: () => (
                    //     <Button
                    //     onPress={() => {navigation.navigate("Cart")}}
                    //         title=" Cart "
                    //         color="#00cc00"
                    //     />
                    // ),
                    // title: 'Awesome app',

                    headerShown: true,
                }} />
                <Stack.Screen name="Cart" component={Cart}

                />
                <Stack.Screen name="PaginationExample" component={PaginationExample}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
