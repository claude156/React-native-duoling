import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, View } from "react-native";
import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="dark" />
      <View className="flex-1 px-7 pb-4">
        <View className="items-center pt-5">
          <View className="flex-row items-center gap-2">
            <Image
              source={images.mascotLogo}
              contentFit="contain"
              accessibilityLabel="Muolingo fox mascot logo"
              className="h-14 w-14"
            />
            <Text className="font-poppins-bold text-[28px] text-text-primary">
              muolingo
            </Text>
          </View>
        </View>

        <View className="mt-10">
          <Text className="font-poppins-semibold text-[36px] leading-[1.25] text-text-primary">
            Your AI language{"\n"}
            <Text className="text-brand-purple-deep">teacher</Text>.
          </Text>
          <Text className="mt-4 font-poppins-regular text-[16px] leading-[28px] text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="relative min-h-0 flex-1 items-center justify-center">
          <View className="absolute left-1 top-[12%] z-10 -rotate-6 rounded-[22px] bg-[#eef6ff] px-5 py-3">
            <Text className="font-poppins-medium text-[20px] text-text-primary">
              Hello!
            </Text>
          </View>
          <View className="absolute right-2 top-[8%] z-10 rotate-6 rounded-[22px] bg-[#f6f4ff] px-5 py-3">
            <Text className="font-poppins-semibold text-[20px] text-brand-purple-deep">
              ¡Hola!
            </Text>
          </View>
          <View className="absolute right-0 top-[39%] z-10 rotate-6 rounded-[22px] bg-[#fff2ec] px-5 py-3">
            <Text className="font-poppins-semibold text-[20px] text-[#ed4c37]">
              你好!
            </Text>
          </View>
          <View className="onboarding-mascot-frame items-center justify-center">
            <Image
              source={images.mascotWelcome}
              contentFit="contain"
              accessibilityLabel="A cheerful fox wearing a backpack"
              className="h-full w-full"
            />
          </View>
        </View>

        <Link href="/" asChild>
          <Pressable
            accessibilityRole="button"
            className="relative h-[76px] flex-row items-center justify-center rounded-[24px] bg-brand-purple-deep"
          >
            <Text className="font-poppins-semibold text-[20px] text-white">
              Get Started
            </Text>
            <Text className="absolute right-6 font-poppins-regular text-[40px] leading-none text-white">
              ›
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
