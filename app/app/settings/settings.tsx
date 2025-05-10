
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsScreen from "@/components/layout/UX/settings/SettingsScreen";

export default function Settings() {
  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <SettingsScreen />
    </SafeAreaView>
  );
}