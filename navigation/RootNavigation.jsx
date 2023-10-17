import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNav from "./DrawerNav";
import NewScreen from "../components/Home/NewScreen";
import PlanInfo from "../components/Modal/PlanInfo";
import JoinGroup from "../components/Modal/JoinGroup";
import CreateGroup from "../components/Modal/CreateGroup";
import AddPlan from "../components/Modal/AddPlan";

const Root = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Root.Navigator>
      <Root.Group>
        {/* <Root.Screen name="DrawerNav" component={DrawerNav} options={{headerShown: false}}/>
        <Root.Screen name="NewScreen" component={NewScreen} />
        <Root.Screen name="PlanInfo" component={PlanInfo} />
        <Root.Screen name="JoinGroup" component={JoinGroup} />
        <Root.Screen name="CreateGroup" component={CreateGroup} /> */}
        <Root.Screen name="AddPlan" component={AddPlan} options={{headerShown: false}}/>
      </Root.Group>
    </Root.Navigator>
  );
};

export default RootNavigation;
