
import { Text, View, SafeAreaView } from "react-native";
import AutoSlider from "@/components/layout/UX/AdSlider";

const HomeScreen = () => {

    return (

        <SafeAreaView className="flex-1">
            <View className="flex-1 justify-center items-center">
                <AutoSlider />
                <Text>Featured</Text>
            </View>
            <View>
                <Text>Partners</Text>
                <Text>see all</Text>
            </View>
            <View>

            </View>
        </SafeAreaView>
    )

}

export default HomeScreen;