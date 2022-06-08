import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { ListHeaderComponent } from "./ListHeaderComponent";

const arrayOfAvatars = [
  {
    id: 1,
    url: "",
  },
  {
    id: 2,
    url: "",
  },
  {
    id: 3,
    url: "",
  },
  {
    id: 4,
    url: "",
  },
  {
    id: 5,
    url: "",
  },
  {
    id: 6,
    url: "",
  },
  {
    id: 7,
    url: "",
  },
  {
    id: 8,
    url: "",
  },
];

export const ListOfAvatars = () => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log("hello")}>
        <Text>{item.id}</Text>
      </Pressable>
    );
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <FlatList
        data={arrayOfAvatars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ListHeaderComponent={<ListHeaderComponent />}
      />
    </View>
  );
};
