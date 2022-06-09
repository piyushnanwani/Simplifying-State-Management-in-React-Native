import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const arrayOfMessages = [
  {
    id: 1,
    type: "to",
    text: "see the lions or sea lions? also, is mac there with u??",
  },
  {
    id: 2,
    type: "to",
    text: "when?",
  },
  {
    id: 3,
    type: "from",
    text: "they are doing a feed thing event at the zoo..",
  },
  {
    id: 4,
    type: "from",
    text: "we r goin to c the lions",
  },
];

export const ListOfMessages = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.text,
          item.type === "from" ? styles.textTo : styles.textFrom,
        ]}
      >
        <Text style={{}}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={arrayOfMessages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#FAFAFA",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontSize: 14,
    padding: 10,
    maxWidth: "65%",
    marginVertical: 14,
  },
  textFrom: {
    borderTopLeftRadius: 20,
    alignSelf: "flex-end",
  },
  textTo: {
    borderTopRightRadius: 20,
    alignSelf: "flex-start",
  },
});
