import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "../global.css";

import { useRouter } from "expo-router";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutUp,
} from "react-native-reanimated";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar
        //@ts-ignore
        style="light"
      />
      <Image
        className="w-full h-full absolute"
        source={require("../assets/images/background.png")}
      />
      {/* Lights */}
      <View className="absolute w-full flex-row justify-around">
        <Animated.Image
          className="w-[90] h-[225]"
          source={require("../assets/images/light.png")}
          entering={FadeInUp.delay(200).duration(1000).springify()}
          exiting={FadeOutUp.delay(200).duration(1000)}
        />
        <Animated.Image
          className="w-[65] h-[160]"
          source={require("../assets/images/light.png")}
          entering={FadeInUp.delay(400).duration(1000).springify()}
          exiting={FadeOutUp.delay(400).duration(1000)}
        />
      </View>

      {/* Title and form  */}
      <View className="w-full h-full flex justify-around pt-40 pb-10">
        {/* Title */}
        <Animated.View
          className=" flex justify-center items-center"
          entering={FadeInUp.duration(1000).springify()}
        >
          <Text className="text-white font-bold tracking-wider text-5xl">
            Login
          </Text>
        </Animated.View>

        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
            entering={FadeInDown.duration(1000).springify()}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TextInput placeholder="Password" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            className="w-full"
            entering={FadeInDown.delay(400).duration(1000).springify()}
          >
            <TouchableOpacity className="w-full bg-sky-500 p-4 rounded-2xl mb-3">
              <Text className="text-white font-bold tracking-wider text-xl text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            className="flex-row justify-center items-center gap-x-1 space-x-2"
            entering={FadeInDown.delay(600).duration(1000).springify()}
          >
            <Text className="text-gray-500">{`Don't have an account?`}</Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text className="text-sky-500 font-bold">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
