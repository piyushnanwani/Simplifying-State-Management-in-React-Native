import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { ListOfAvatars } from "../components/ListOfAvatars";

export const Feed = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: headerHeight, paddingHorizontal: 20 }}
    >
      <View>
        <ListOfAvatars />
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 30 }}>
          this will be the list of cards
        </Text>
      </View>
    </SafeAreaView>
  );
};
