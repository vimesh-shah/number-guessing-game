import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NumberScreen from "./screens/NumberScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Start"
          component={HomeScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Card0"
          component={NumberScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Card1"
          component={NumberScreen}
          options={{ gestureEnabled: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Card2"
          component={NumberScreen}
          options={{ gestureEnabled: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Card3"
          component={NumberScreen}
          options={{ gestureEnabled: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Card4"
          component={NumberScreen}
          options={{ gestureEnabled: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Card5"
          component={NumberScreen}
          options={{ gestureEnabled: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ gestureEnabled: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
