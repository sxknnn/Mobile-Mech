import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./app/screens/Welcome";
import PreUserLogin from "./app/screens/User/PreUserLogin";
import PreMechLogin from "./app/screens/Mech/PreMechLogin";
import UserLogin from "./app/screens/User/UserLogin";
import UserRegister from "./app/screens/User/UserRegister";
import MechLogin from "./app/screens/Mech/MechLogin";
import MechRegister from "./app/screens/Mech/MechRegister";
import UserHome from "./app/screens/User/UserHome";
import MechHome from "./app/screens/Mech/MechHome";
import BookAppointment from "./app/screens/User/BookAppointment";
import Payment from "./app/screens/User/payment";
import Credit from "./app/screens/User/Credit";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App executed");

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#007aff" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="PreUserLogin" component={PreUserLogin} options={{ headerShown: false }} />
        <Stack.Screen name="PreMechLogin" component={PreMechLogin} options={{ headerShown: false }} />
        <Stack.Screen name="UserLogin" component={UserLogin} options={{ headerShown: false }} />
        <Stack.Screen name="UserRegister" component={UserRegister} options={{ headerShown: false }} />
        <Stack.Screen name="MechLogin" component={MechLogin} options={{ headerShown: false }} />
        <Stack.Screen name="MechRegister" component={MechRegister} options={{ headerShown: false }} />
        <Stack.Screen name="MechHome" component={MechHome} options={{ headerShown: false }} />
        <Stack.Screen name="UserHome" component={UserHome} options={{ headerShown: false }} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
        <Stack.Screen name="Credit" component={Credit} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
