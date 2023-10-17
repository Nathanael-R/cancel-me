import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Home from "../screens/Home";
import Account from "../screens/Account";
import { Alert } from "react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const DrawerContent = (props) => {
  const navigation = useNavigation();
  const logOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout", [
      {
        text: "No",
        onPress: () => console.log("Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => console.log("Also Pressed"),
      },
    ]);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Create Group"
        onPress={() => navigation.navigate("CreateGroup")}
        labelStyle={{ textAlign: "center" }}
        icon={() => (
          <MaterialCommunityIcons
            color="black"
            size={25}
            name="home-group-plus"
          />
        )}
      />
      <DrawerItem
        label="Join Group"
        onPress={() => navigation.navigate("JoinGroup")}
        labelStyle={{ textAlign: "center" }}
        icon={() => (
          <MaterialCommunityIcons color="black" size={25} name="login" />
        )}
      />
      <DrawerItem
        label="Night Mode"
        onPress={logOut}
        labelStyle={{ textAlign: "center" }}
        icon={() => (
          <MaterialCommunityIcons
            color="black"
            size={25}
            name="weather-night"
          />
        )}
        //focused=({})
      />
      <DrawerItem
        label="Rate the App"
        onPress={logOut}
        labelStyle={{ textAlign: "center" }}
        icon={() => (
          <MaterialCommunityIcons
            color="black"
            size={25}
            name="star-plus-outline"
          />
        )}
      />
      <DrawerItem
        label="Sign Out"
        onPress={logOut}
        style={{
          backgroundColor: "red",
          borderRadius: 10,
          marginTop: 70,
        }}
        labelStyle={{ color: "white", fontWeight: 600, textAlign: "center" }}
        icon={() => <SimpleLineIcons color="white" size={25} name="logout" />}
      />
    </DrawerContentScrollView>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          drawerLabelStyle: { textAlign: "center" },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={"home-outline"}
              size={25}
              color={focused ? "black" : "#69696980"}
            />
          ),
          drawerStyle: {paddingHorizontal: 30}
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          headerTitleAlign: "center",
          drawerLabelStyle: { textAlign: "center" },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={"ios-person-circle-outline"}
              size={25}
              color={focused ? "black" : "#69696980"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
