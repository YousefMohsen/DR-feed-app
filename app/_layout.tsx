import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <NativeTabs
        backgroundColor="#fff"
        indicatorColor="#E6F4FE"
        labelStyle={{ selected: { color: "#11181C" } }}
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>DR Feed</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf={{ default: "house", selected: "house.fill" }}
            md="home"
            renderingMode="template"
          />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="explore">
          <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf={{ default: "map", selected: "map.fill" }}
            md="explore"
            renderingMode="template"
          />
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
