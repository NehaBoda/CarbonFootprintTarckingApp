import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Screen/Welcome';
import Login from './src/Screen/Login';
import Signup from './src/Screen/Signup';
import Home from './src/Screen/Home'
import Verification from './src/Screen/Verification';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activity from './src/Screen/Activity';
import Resultdisplay from './src/Screen/Resultdisplay';
import Menu from './src/Screen/Menu';
import Education from './src/Screen/Education';
import Notification from './src/Screen/Notification';
import E2 from './src/Screen/E2';
import E1 from './src/Screen/E1';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
         <Stack.Screen name="Verification" component={Verification}  options={{headerShown:false}}/>
         <Stack.Screen name="Activity" component={Activity}  options={{headerShown:false}}/>
         <Stack.Screen name="Resultdisplay" component={Resultdisplay}  options={{headerShown:false}}/>
         <Stack.Screen name="Menu" component={Menu}  options={{headerShown:false}}/>
         <Stack.Screen name="Education" component={Education}  options={{headerShown:false}}/>
         <Stack.Screen name="Notification" component={Notification}  options={{headerShown:false}}/>
         <Stack.Screen name="E2" component={E2}  options={{headerShown:false}}/>
         <Stack.Screen name="E1" component={E1}  options={{headerShown:false}}/>
        </Stack.Navigator>
     </NavigationContainer> 
     
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
