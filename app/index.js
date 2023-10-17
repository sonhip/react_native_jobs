import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { COLORS } from "../constants";

export default function Home() {
  const router = useRouter;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
        }}
      />
      <Text>ss</Text>
    </SafeAreaView>
  );
}
