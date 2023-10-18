import { View, Text } from "react-native";
import React from "react";
import { Checkbox } from "expo-checkbox";

const Checkboxes = ({isChecked, onValueChange}) => {

  return (
    <View>
      <Checkbox
        style={{ height: 25, width: 25 }}
        value={isChecked}
        onValueChange={onValueChange}
        color={isChecked ? "#4630EB" : undefined}
      />
    </View>
  );
};

export default Checkboxes;
