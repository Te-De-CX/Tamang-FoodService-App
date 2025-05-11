import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import { image1 } from '@/libs/services/images';

// Define the type for your slider items
type SlideItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const AutoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = Dimensions.get('window').width;
  
  const sliderData: SlideItem[] = [
    {
      id: 1,
      image: image1,
      title: 'Special Offer',
      subtitle: 'Get 20% off on all products'
    },
    {
      id: 2,
      image: image1,
      title: 'New Arrivals',
      subtitle: 'Check out our latest collection'
    },
    {
      id: 3,
      image: image1,
      title: 'Limited Time',
      subtitle: 'Only available this week'
    }
  ];

  // Properly type the renderItem function
  const renderItem = ({ item }: { item: SlideItem }) => (
    <View className="relative rounded-xl overflow-hidden mx-2">
      <Image 
        source={{ uri: item.image }} 
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
        <Text className="text-white text-xl font-bold">{item.title}</Text>
        <Text className="text-white">{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View className="mb-8">
      <Carousel
        loop
        width={width - 40}
        height={200}
        autoPlay={true}
        data={sliderData}
        scrollAnimationDuration={1000}
        autoPlayInterval={3000}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        renderItem={renderItem}
      />
      
      {/* Pagination indicators */}
      <View className="flex-row justify-center mt-2">
        {sliderData.map((_, index) => (
          <View key={index} className="mx-1">
            <MaterialIcons 
                name={activeIndex === index ? "radio-button-checked" : "radio-button-unchecked"} 
                size={12} 
                color={activeIndex === index ? "#3b82f6" : "#9ca3af"} 
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default AutoSlider;