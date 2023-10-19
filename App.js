// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import BeforeScreen from "./screen/BeforeScreen";
// import LoginScreen from "./screen/LoginScreen";
// import registerScreen from "./screen/RegisterScreen";

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//   const StackNavigator = createNativeStackNavigator();
//   return(
//     <NavigationContainer>
//       <StackNavigator.Navigator initialRouteName="beforeScreen"
//             screenOptions={{headerStyle: {backgroundColor: "lightblue"}}}
//         >
//           <StackNavigator.Screen name="BeforeScreen" component={BeforeScreen}
//             options={{
//                 title: "เคยใช้หรือยัง"
//             }}
//             />
//             <StackNavigator.Screen name="LoginScreen" component={LoginScreen}
//             options={{
//                 title: "เข้าสู่ระบบ"
//             }}
//             />
//             {/* <StackNavigator.Screen name="registerScreen" component={registerScreen}
//             options={{
//                 title: "สมัครสมาชิก"
//             }}
//             /> */}
//         </StackNavigator.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4eeee",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BeforeScreen from "./screen/BeforeScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
