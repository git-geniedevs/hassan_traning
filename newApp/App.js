import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import One from "./Exersice/One";
import Three from "./Exersice/Three";
import Two from "./Exersice/Two";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: "false" }}
        initialRouteName="Two"
      >
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
