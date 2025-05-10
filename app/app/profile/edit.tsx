import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuthStore } from '@/libs/store/authStore';
import { Controller, useForm } from 'react-hook-form';
import { router } from 'expo-router';

type FormData = {
  name: string;
  email: string;
};

const EditProfileScreen = () => {
  const { user, updateUser } = useAuthStore();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  const onSubmit = (data: FormData) => {
    updateUser(data);
    router.back();
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
      <View className="mb-8">
        <Text className="text-2xl font-bold dark:text-white">Edit Profile</Text>
      </View>

      <View className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm">
        <View className="mb-4">
          <Text className="text-sm mb-1 dark:text-gray-300">Full Name</Text>
          <Controller
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 dark:text-white"
                placeholder="Enter your name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text className="text-red-500 text-sm mt-1">{errors.name.message}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-sm mb-1 dark:text-gray-300">Email</Text>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 dark:text-white"
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text className="text-red-500 text-sm mt-1">{errors.email.message}</Text>
          )}
        </View>

        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-3 items-center"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-white font-medium">Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;