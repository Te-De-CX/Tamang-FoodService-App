
import { Text, View, Image } from "react-native";

interface FoodCardProp {
    text: string,
    image:any,
    price: number,
    culture: string,
}

type FoodCardType = React.FC<FoodCardProp>

const FoodCard:FoodCardType  = ({ text, image, price, culture }) => {

    return (
        <View className="w-[150px] h-[100px] rounded-xl overflow-hidden">
            <Image
                source={{ uri: image }}
                className="flex-1 justify-center items-center"
            />
            <View>
                <Text className="text-white text-lg font-bold">{text}</Text>
                <View>
                    <Text>{price}</Text>
                    <Text>{culture}</Text>
                </View>
            </View>
        </View>
    )
}

export default FoodCard;