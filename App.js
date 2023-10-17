import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigation />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
