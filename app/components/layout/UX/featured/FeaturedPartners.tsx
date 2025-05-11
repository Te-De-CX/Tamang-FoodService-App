import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

interface FeaturedPartnerProps {
    imageUrl: string;
    duration: string;
    rating: number;
    price: string;
}

const FeaturedPartner: React.FC<FeaturedPartnerProps> = ({
    imageUrl,
    duration,
    rating,
    price,
}) => (
    <ImageBackground
        source={{ uri: imageUrl }}
        className="h-44 rounded-2xl overflow-hidden my-2.5 justify-end"
        imageStyle={{ borderRadius: 16 }}
    >
        <View className="bg-black/40 p-3">
            <View className="flex-row justify-between items-center">
                <Text className="text-white font-bold text-base">{duration}</Text>
                <Text className="text-white font-bold text-base">⭐ {rating}</Text>
                <Text className="text-white font-bold text-base">{price}</Text>
            </View>
        </View>
    </ImageBackground>
);

export default FeaturedPartner;
