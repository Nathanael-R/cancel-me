import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Home from './screens/Home';

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
