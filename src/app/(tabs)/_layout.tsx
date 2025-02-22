import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { MyColors } from "@/src/constants/MyColors";
import {
  ICON_general,
  ICON_other,
  ICON_profile,
  ICON_search,
  ICON_vocabs,
} from "@/src/components/icons/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: MyColors.fill_bg,
        },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 700,
          color: MyColors.text_white,
        },
        tabBarStyle: {
          height: 100,
          borderTopWidth: 1,
          backgroundColor: MyColors.fill_bg,

          borderTopColor: MyColors.border_white_005,
        },
        tabBarActiveTintColor: MyColors.text_primary,
        tabBarLabelStyle: {
          fontSize: 15, // Adjust font size
          fontFamily: "Nunito-Bold",
        },
      }}
    >
      <Tabs.Screen
        name="vocabs"
        options={{
          title: "Vocabs",
          tabBarIcon: ({ focused }) => (
            <ICON_vocabs color={focused ? "primary" : "grey"} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore_PAGE"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <ICON_search
              big={true}
              color={focused ? "primary" : "grey_light"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="general"
        options={{
          title: "General",
          tabBarIcon: ({ focused }) => (
            <ICON_general color={focused ? "primary" : "grey"} />
          ),
        }}
      />
    </Tabs>
  );
}
