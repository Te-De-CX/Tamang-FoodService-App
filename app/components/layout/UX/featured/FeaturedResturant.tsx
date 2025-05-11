import { Text, View, Image, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

interface RestaurantItem {
    id: number;
    image: string;
    name: string;
    duration: number;
    rating: number;
    address: string;
    type: string;
};

interface FeaturedRestaurantCardProps {
    data: RestaurantItem[];
};

const FeaturedRestaurantCard: React.FC<FeaturedRestaurantCardProps> = ({ data }) => {
    const width = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = React.useState(0);

    const renderItem = ({ item }: { item: RestaurantItem }) => (
        <View className="relative rounded-xl overflow-hidden mx-2 bg-white shadow-md">
            <Image 
                source={{ uri: item.image }} 
                className="w-full h-48"
                resizeMode="cover"
            />
            <View className="p-3">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-600 text-sm">{item.address}</Text>
                <View className="flex-row justify-between mt-2">
                    <View className="flex-row items-center">
                        <MaterialIcons name="star" size={16} color="#f59e0b" />
                        <Text className="text-yellow-500 ml-1">{item.rating}</Text>
                    </View>
                    <Text className="text-gray-500">{item.duration} min</Text>
                    <Text className="text-blue-500 text-xs bg-blue-50 px-2 py-1 rounded-full">
                        {item.type}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View className="my-4">
            <Carousel
                loop
                width={width - 40}
                height={280}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                autoPlayInterval={3000}
                onSnapToItem={(index) => setActiveIndex(index)}
                renderItem={renderItem}
            />
            <View className="flex-row justify-center mt-2">
                {data.map((_, index) => (
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

export default FeaturedRestaurantCard;