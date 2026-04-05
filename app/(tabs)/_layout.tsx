import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs
      backgroundColor="rgba(255, 255, 255, 0.72)" // frosted glass white base
      indicatorColor="rgba(180, 20, 30, 0.75)" // muted, translucent crimson
      labelStyle={{
        selected: { color: "#ff3b48" }, // softer red, not screaming
        default: { color: "rgba(60, 60, 67, 0.6)" }, // iOS-style inactive grey
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>DR Feed</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          selectedColor="#ff3b48"
          sf={{ default: "house", selected: "house.fill" }}
          md="home"
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          selectedColor="#ff3b48"
          sf={{ default: "map", selected: "map.fill" }}
          md="explore"
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="stories">
        <NativeTabs.Trigger.Label>Stories</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          selectedColor="#ff3b48"
          sf={{ default: "book", selected: "book.fill" }}
          md="book"
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
