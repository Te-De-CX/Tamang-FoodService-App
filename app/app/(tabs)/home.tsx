
import { Text, View, SafeAreaView, Image } from "react-native";
import AutoSlider from "@/components/layout/UX/AdSlider";

const FreeDelivery = require("@/assets/images/banner/Banner.png");

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
                <Image
                    src={FreeDelivery}
                    alt="ads free delivery"
                />
            </View>
        </SafeAreaView>
    )

}

export default HomeScreen;