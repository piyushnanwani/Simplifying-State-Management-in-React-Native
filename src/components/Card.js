import React from "react";
import { View, Text, Image } from "react-native";

export const Card = ({ item }) => {
  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: 288,
          borderRadius: 20,
          marginBottom: 32,
        }}
        source={{
          uri: item.url,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 36,
            height: 36,
            borderRadius: 20,
            marginRight: 8,
          }}
          source={{
            uri: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/4.png",
          }}
        />
        <View>
          <Text style={{ color: "#ffffff", fontSize: 12 }}>
            Dennis Reynolds
          </Text>
          <Text style={{ color: "#D8D8D8", fontSize: 12 }}>2 hrs ago</Text>
        </View>
      </View>
    </View>
  );
};
