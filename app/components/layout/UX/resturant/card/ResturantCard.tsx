
import { Text, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

interface ResturantCardProp {
    name: string,
    culture: string[],
    type: string,
    ratings: number,
    peoperRatings: number,
    duration: number
}

type ResturantCardType = React.FC<ResturantCardProp>

const ResturantCard: ResturantCardType = ({ name, culture, type, ratings, peoperRatings, duration  }) => {

    return (
        <View>
            <Image />
            <View>
                <Text>{name}</Text>
                <View>
                    <Text>$$</Text>
                    {
                        culture.map( value => (
                            <View key={value} >
                                <Text>{value}</Text>
                            </View>
                        ))
                    }
                </View>
                <View>
                    <Text>
                        {ratings}
                    </Text>
                    <View>
                        <Text>
                            <MaterialIcons 
                                name="star"
                                size={12} 
                                color="#3b82f6"
                            />
                            {peoperRatings} Ratings
                        </Text>
                    </View>
                    <Text>
                        {duration} min
                    </Text>
                    <View>
                        <Text>
                            {type}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ResturantCard;