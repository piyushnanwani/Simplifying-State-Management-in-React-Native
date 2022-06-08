import React from "react";
import { View, FlatList, Pressable, Image } from "react-native";
import { ListHeaderComponent } from "./ListHeaderComponent";

const arrayOfAvatars = [
  {
    id: 1,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/1.png",
  },
  {
    id: 2,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/2.png",
  },
  {
    id: 3,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/3.png",
  },
  {
    id: 4,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/4.png",
  },
  {
    id: 5,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/5.png",
  },
  {
    id: 6,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/6.png",
  },
  {
    id: 7,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/7.png",
  },
  {
    id: 8,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/8.png",
  },
];

export const ListOfAvatars = () => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log("hello")}>
        <Image
          style={{ height: 56, width: 56, borderRadius: 28, marginRight: 30 }}
          source={{
            uri: item.url,
          }}
        />
      </Pressable>
    );
  };
  return (
    <View
      style={{
        zIndex: 100,
        paddingVertical: 30,
        paddingLeft: 20,
        backgroundColor: "rgba(255,255,255, 0.85)",
      }}
    >
      <FlatList
        data={arrayOfAvatars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ListHeaderComponent={<ListHeaderComponent />}
        showsHorizontalScrollIndicator={false}
        snapToInterval={86}
        decelerationRate='fast'
      />
    </View>
  );
};
