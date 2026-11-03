import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-8 px-8">
      <Text className="h1 text-center color-error">
        Welcome to Duolingo app that will help us for language translation
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="rounded-2xl bg-brand-purple-deep px-8 py-4">
          <Text className="font-poppins-semibold text-base text-white">
            View onboarding
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}