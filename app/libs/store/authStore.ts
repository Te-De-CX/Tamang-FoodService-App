import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  email: string;
  name?: string;
  token?: string;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  updateUser: (updates: Partial<User>) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          set({
            user: { email, name: "Test User", token: "fake-jwt-token" },
            isAuthenticated: true,
            loading: false,
          });
        } catch (error) {
          let errorMessage = 'Invalid email or password';
          if (error instanceof Error) {
            errorMessage = error.message;
          }
          set({ error: errorMessage, loading: false });
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false, error: null });
      },
      register: async (email, password, name) => {
        set({ loading: true, error: null });
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          set({
            user: { email, name, token: "fake-jwt-token" },
            isAuthenticated: true,
            loading: false,
          });
        } catch (error) {
          let errorMessage = 'Registration failed';
          if (error instanceof Error) {
            errorMessage = error.message;
          }
          set({ error: errorMessage, loading: false });
        }
      },
      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null
        }))
    }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);