import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useAuthStore } from '@/libs/store/authStore';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const SettingsScreen = () => {
  const { user, logout } = useAuthStore();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
      {/* Header */}
      <View className="mb-8">
        <Text className="text-2xl font-bold dark:text-white">Settings</Text>
      </View>

      {/* User Profile Section */}
      <View className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm">
        <View className="flex-row items-center mb-4">
          <View className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full items-center justify-center mr-4">
            <MaterialIcons 
              name="person" 
              size={32} 
              className="text-blue-500 dark:text-blue-300" 
            />
          </View>
          <View>
            <Text className="text-lg font-semibold dark:text-white">
              {user?.name || 'User'}
            </Text>
            <Text className="text-gray-500 dark:text-gray-400">
              {user?.email || 'user@example.com'}
            </Text>
          </View>
        </View>
        <TouchableOpacity 
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 items-center"
          onPress={() => router.push('/profile/edit')}
        >
          <Text className="text-blue-500 dark:text-blue-400 font-medium">
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Settings Options */}
      <View className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm">
        <View className="flex-row justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialIcons 
              name="dark-mode" 
              size={24} 
              className="text-gray-600 dark:text-gray-300 mr-3" 
            />
            <Text className="text-gray-800 dark:text-gray-200">Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#e5e7eb', true: '#3b82f6' }}
            thumbColor={darkMode ? '#ffffff' : '#f3f4f6'}
          />
        </View>

        <View className="flex-row justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialIcons 
              name="notifications" 
              size={24} 
              className="text-gray-600 dark:text-gray-300 mr-3" 
            />
            <Text className="text-gray-800 dark:text-gray-200">Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#e5e7eb', true: '#3b82f6' }}
            thumbColor={notificationsEnabled ? '#ffffff' : '#f3f4f6'}
          />
        </View>

        <TouchableOpacity className="flex-row justify-between items-center py-3">
          <View className="flex-row items-center">
            <MaterialIcons 
              name="security" 
              size={24} 
              className="text-gray-600 dark:text-gray-300 mr-3" 
            />
            <Text className="text-gray-800 dark:text-gray-200">Security</Text>
          </View>
          <MaterialIcons 
            name="chevron-right" 
            size={24} 
            className="text-gray-400" 
          />
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm">
        <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialIcons 
              name="help" 
              size={24} 
              className="text-gray-600 dark:text-gray-300 mr-3" 
            />
            <Text className="text-gray-800 dark:text-gray-200">Help & Support</Text>
          </View>
          <MaterialIcons 
            name="chevron-right" 
            size={24} 
            className="text-gray-400" 
          />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-3">
          <View className="flex-row items-center">
            <MaterialIcons 
              name="info" 
              size={24} 
              className="text-gray-600 dark:text-gray-300 mr-3" 
            />
            <Text className="text-gray-800 dark:text-gray-200">About</Text>
          </View>
          <MaterialIcons 
            name="chevron-right" 
            size={24} 
            className="text-gray-400" 
          />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 items-center"
        onPress={logout}
      >
        <Text className="text-red-500 dark:text-red-400 font-medium">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;