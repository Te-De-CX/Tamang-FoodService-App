
import { Text, View, Image } from "react-native";

interface FeaturedCardProp {
    image: any,
    name: string,
    duration: number,
    rating: number,
    address: string,
    type: string
};

type FeaturedType = React.FC<FeaturedCardProp>;

const FeaturedCard: FeaturedType = ({ image, name, duration = 25, rating = 4.5, address, type = "free delivery" }) => {

    return (
        <View>
            <Image
                src={image}
                alt={name}
            />
            <View>
                <Text>{name}</Text>
                <Text>{address}</Text>
                <View>
                    <Text>{rating}</Text>
                    <Text>{duration} min</Text>
                    <Text>{type}</Text>
                </View>
            </View>
        </View>
    )
}

export default FeaturedCard;