import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <NativeTabs
        backgroundColor="#d60007"
        indicatorColor="#d60007"
        labelStyle={{ selected: { color: "#d60007" } }}
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>DR Feed</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            selectedColor={"#d60007"}
            sf={{ default: "house", selected: "house.fill" }}
            md="home"
            renderingMode="template"
          />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="explore">
          <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            selectedColor={"#d60007"}
            sf={{ default: "map", selected: "map.fill" }}
            md="explore"
            renderingMode="template"
          />
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
