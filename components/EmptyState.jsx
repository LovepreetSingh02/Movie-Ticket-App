import { Image, Text, View } from "react-native";
import React from "react";
import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[250px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold text-red-600">
        {title}
      </Text>
      <Text className="font-pmedium mt-2 text-sm text-red-900">{subtitle}</Text>
    </View>
  );
};

export default EmptyState;
