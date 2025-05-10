import { View, FlatList, ListRenderItem, SafeAreaView } from "react-native";
import { foodData } from "@/libs/data/FoodData";
import FoodCard from "@/components/layout/UX/FoodCard";

type FoodItem = {
  id: number;
  name: string;
  category: string;
  image: any;
  description: string;
  price: number;
  rating?: number;
};

const Foods = () => {
  const handleAddToCart = (item: FoodItem) => {
    console.log("Added to cart:", item.name);
  };

  const renderItem: ListRenderItem<FoodItem> = ({ item }) => (
    <View className="w-1/2 p-2">
      <FoodCard
        name={item.name}
        description={item.description}
        image={item.image}
        price={item.price}
        rating={item.rating}
        onAddToCart={() => handleAddToCart(item)}
      />
    </View>
  );

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <FlatList
        data={foodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerClassName="p-2"
        columnWrapperClassName="justify-between"
      />
    </SafeAreaView>
  );
};

export default Foods;