
import { Text, View, TouchableOpacity } from "react-native";
import { useAuthStore } from "@/libs/store/authStore";

function ProfileScreen() {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <View className="p-4">
      {isAuthenticated && user ? (
        <>
          <Text className="text-xl font-bold">Welcome, {user.name}</Text>
          <Text className="text-gray-600 mb-4">{user.email}</Text>
          <TouchableOpacity
            className="bg-red-500 p-3 rounded-lg"
            onPress={logout}
          >
            <Text className="text-white text-center">Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Please log in to view your profile</Text>
      )}
    </View>
  );
}

export default ProfileScreen;