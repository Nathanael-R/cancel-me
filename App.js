import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import Home from "./screens/Home";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AddPlan from "./components/Modal/AddPlan";
import PlanInfo from "./components/Modal/PlanInfo";
import Account from "./screens/Account";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Home /> */}
        {/* <PlanInfo /> */}
        {/* <AddPlan /> */}
        <Account/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
