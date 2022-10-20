import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import RootNavigator from './navigator/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}