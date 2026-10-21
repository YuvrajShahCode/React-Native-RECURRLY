import {View, Text} from "react-native"
import {Link} from "expo-router";

const SignUp = () => {
    return(
        <View>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-in">Sign In Page</Link>
        </View>
    )
}
export default SignUp;