import React from "react";
import { View, FlatList, Pressable, Image, Text } from "react-native";

const arrayOfConvos = [
  {
    id: 1,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/1.png",
    message: "Hey, how's it goin?",
    name: "Malena Tudi",
  },
  {
    id: 2,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/2.png",
    message: "Yo, are you going to the Jake's wedding?",
    name: "Jakob Curtis",
  },
  {
    id: 3,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/3.png",
    message: "Amir said we'd be staying over for a while... but ...",
    name: "John Doe",
  },
  {
    id: 4,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/4.png",
    message: "hey, i got new memes for you",
    name: "Charlie Kelly",
  },
  {
    id: 5,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/5.png",
    message: "GoT really took a nose dive huh",
    name: "Josephine Darakjy",
  },
  {
    id: 6,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/6.png",
    message: "Hey, how's it goin?",
    name: "Art Venere",
  },
  {
    id: 7,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/7.png",
    message: "Yo, are you going to the Jake's wedding?",
    name: "Lenna Paprocki",
  },
  {
    id: 8,
    url: "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/chapter-3/assets/avatars/8.png",
    message: "Amir said we'd be staying over for a while... but ...",
    name: "Donette Foller",
  },
];

export const ListOfConvos = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: 103,
          backgroundColor: "rgba(255,255,255,0.6)",
          borderRadius: 33,
          marginBottom: 16,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <View
            style={{
              width: 67,
              height: 67,
              borderRadius: 35,
              borderColor: "#000000",
              borderWidth: 1,
              marginHorizontal: 17,
            }}
          >
            <Image
              style={{
                width: 61,
                height: 61,
                borderRadius: 35,
                marginTop: 2,
                marginLeft: 2,
              }}
              source={{
                uri: item.url,
              }}
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 14, paddingBottom: 9 }}>{item.name}</Text>
          <Text style={{ color: "#656565", width: "65%" }}>{item.message}</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: -30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={arrayOfConvos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate='fast'
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};
