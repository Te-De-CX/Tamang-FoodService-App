import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Link, router } from 'expo-router';
import { useAuthStore } from '@/libs/store/authStore';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { login, loading, error } = useAuthStore();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await login(data.email, data.password);
    router.replace('/(tabs)'); // Redirect after successful login
  };

  return (
    <View className="flex-1 justify-center p-6 bg-gray-50">
      <Text className="text-3xl font-bold text-center mb-8">Welcome Back</Text>
      
      {error && (
        <Text className="text-red-500 text-center mb-4">{error}</Text>
      )}

      <View className="mb-4">
        <Text className="text-sm mb-1">Email</Text>
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
              className="border border-gray-300 rounded-lg p-3"
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text className="text-red-500 text-sm mt-1">{errors.email.message}</Text>
        )}
      </View>

      <View className="mb-6">
        <Text className="text-sm mb-1">Password</Text>
        <Controller
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-lg p-3"
              placeholder="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text className="text-red-500 text-sm mt-1">{errors.password.message}</Text>
        )}
      </View>

      <TouchableOpacity
        className="bg-blue-500 rounded-lg p-3 items-center mb-4"
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-medium">Log In</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-gray-600">Don&apos;t have an account? </Text>
        <Link href="/auth/register" className="text-blue-500">
          Sign up
        </Link>
      </View>
    </View>
  );
}