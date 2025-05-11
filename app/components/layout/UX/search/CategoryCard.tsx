
import { Text, View, ImageBackground } from "react-native";

interface CategoryCardProp {
    text: string,
    image:any
}

type CategoryCardType = React.FC<CategoryCardProp>

const CategoryCard:CategoryCardType  = ({ text, image }) => {

    return (
        <View className="w-[150px] h-[100px] rounded-xl overflow-hidden">
            <ImageBackground
                source={{ uri: image }}
                className="flex-1 justify-center items-center"
                imageStyle={{ borderRadius: 12 }}
            >
                <View className="absolute inset-0 bg-black/40" />
                <Text className="text-white text-lg font-bold">{text}</Text>
            </ImageBackground>
        </View>
    )
}

export default CategoryCard;