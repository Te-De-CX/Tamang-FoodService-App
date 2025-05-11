
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";

const FilterPage = () => {

    const categories = []

    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text>
                        Categories
                    </Text>
                    <Text>
                        clear all
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>
                        Dietary
                    </Text>
                    <Text>
                        clear all
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>
                        price range
                    </Text>
                    <Text>
                        clear all
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                apply filters
            </TouchableOpacity>
        </SafeAreaView>
    )
}