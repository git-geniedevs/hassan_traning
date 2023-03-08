import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageScreen from "./app/Screens/ImageScreen";
import UserDetailScreen from "./app/Screens/UserDetailScreen";
import WelcomeScreen from "./app/Screens/WelcomScreen";
import UserScreen from "./app/Screens/UserScreen";
import Two from "./Exersice/Two";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Two"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Two" component={Two} />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
