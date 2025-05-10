import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";

interface FoodCardProps {
  name: string;
  description: string;
  image: ImageSourcePropType;
  price: number;
  rating?: number;
  onAddToCart: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  description,
  image,
  price = 0,
  rating = 0,
  onAddToCart,
}) => {
  return (
    <View className="bg-white rounded-xl shadow-sm shadow-gray-300 overflow-hidden">
      <Image
        source={image}
        className="w-full h-40 object-cover"
        accessibilityLabel={name}
      />
      <View className="p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-lg font-bold text-gray-900 flex-1 mr-2">
            {name}
          </Text>
          <Text className="text-lg font-bold text-blue-600">
            ${price.toFixed(2)}
          </Text>
        </View>
        
        {rating > 0 && (
          <View className="flex-row items-center mb-2">
            <StarIcon size={16} color="#f59e0b" fill="#f59e0b" />
            <Text className="text-sm text-gray-600 ml-1">
              {rating.toFixed(1)}
            </Text>
          </View>
        )}
        
        <Text className="text-sm text-gray-600 mb-4" numberOfLines={2}>
          {description}
        </Text>
        
        <TouchableOpacity
          onPress={onAddToCart}
          className="bg-blue-500 rounded-lg py-3 px-4 items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;