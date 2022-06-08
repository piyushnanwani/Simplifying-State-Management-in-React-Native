import React from "react";
import { View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ListHeaderComponent = () => {
  return (
    <Pressable onPress={() => console.log("pressed the add button")}>
      <View
        style={{
          backgroundColor: "#bada55",
          width: 56,
          height: 56,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 32,
          paddingLeft: 4,
          marginRight: 20,
        }}
      >
        <Ionicons name='md-add' size={50} color='#000000' />
      </View>
    </Pressable>
  );
};
