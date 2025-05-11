
import React from "react";
import { Text, View, Image } from "react-native";

interface PartnersCardProps {
    name: string;
    image: any;
    street: string;
    city: string;
    drive: number
}

type PartnersType = React.FC<PartnersCardProps>;

const PartnersCard: PartnersType = ({ name, image, street, city, drive }) => {

    return (
        <View className="bg-white rounded-lg shadow-sm shadow-gray-300 overflow-hidden">
            <Image
                src={image}
                className="w-full h-40 object-cover"
                accessibilityLabel="Partners"
            />
            <View className="p-4">
                <Text className="text-lg font-bold text-gray-900 flex-1 mr-2">{name}
                </Text>
                <Text className="text-sm text-gray-600 mb-2">{street}, {city}</Text>
                <View>
                    <View>

                    </View>
                    <Text>
                        { drive } min
                    </Text>
                    <Text>
                        Free Delivery
                    </Text>
                </View>
            </View>
        </View>
    )

}

export default PartnersCard;