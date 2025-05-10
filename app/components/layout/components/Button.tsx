import { Text, View } from "react-native";

interface ButtonProp {
    text: string;
}

const Button: React.FC<ButtonProp> = ({ text }) => {

    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}

export default Button;