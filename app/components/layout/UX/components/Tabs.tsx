import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { ImageTab } from './ImageTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Import your tab images
const homeActive = require('@/assets/images/tabs/home-active.png');
const homeInactive = require('@/assets/images/tabs/home-inactive.png');
const exploreActive = require('@/assets/images/tabs/explore-active.png');
const exploreInactive = require('@/assets/images/tabs/explore-inactive.png');
const profileActive = require('@/assets/images/tabs/profile-active.png');
const profileInactive = require('@/assets/images/tabs/profile-inactive.png');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <ImageTab
              activeImage={homeActive}
              inactiveImage={homeInactive}
              isFocused={focused}
              onPress={() => {}}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <ImageTab
              activeImage={exploreActive}
              inactiveImage={exploreInactive}
              isFocused={focused}
              onPress={() => {}}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <ImageTab
              activeImage={profileActive}
              inactiveImage={profileInactive}
              isFocused={focused}
              onPress={() => {}}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}