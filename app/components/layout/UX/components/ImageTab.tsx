// components/ImageTab.tsx
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type ImageTabProps = {
  activeImage: any;
  inactiveImage: any;
  isFocused: boolean;
  onPress: () => void;
  size?: number;
};

export const ImageTab = ({
  activeImage,
  inactiveImage,
  isFocused,
  onPress,
  size = 28,
}: ImageTabProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      }}
    >
      <Image
        source={isFocused ? activeImage : inactiveImage}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};