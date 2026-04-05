import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type FilterItem = {
  key: string;
  label: string;
};

export type FeedFilterProps = {
  items: FilterItem[];
  selectedKey: string;
  onSelect: (key: string) => void;
  style?: StyleProp<ViewStyle>;
};

/**
 * Tag component for the feed filter
 */
function Tag({
  label,
  isSelected,
  onPress,
}: {
  label: FilterItem["label"];
  isSelected: boolean;
  onPress: () => void;
}) {
  // keeps track of whether the tag is selected (0 = no, 1 = yes)
  const selected = useSharedValue(isSelected ? 1 : 0);

  // keeps track of press state (0 = not pressed, 1 = pressed)
  const pressed = useSharedValue(0);

  // update animation when selection changes
  useEffect(() => {
    // when isSelected changes → animate selected.value between 0 and 1 (controls all selected styles)
    // and all styles that depend on selected.value (size, color, position, shadow, text) animate automatically
    selected.value = withSpring(isSelected ? 1 : 0, {
      damping: 14,
      stiffness: 180,
      mass: 0.8,
    });
  }, [isSelected, selected]);

  // styles for the tag box (size, position, colors, shadow)
  const containerStyle = useAnimatedStyle(() => {
    const scale =
      interpolate(selected.value, [0, 1], [1, 1.08]) - pressed.value * 0.04;

    const translateY =
      interpolate(selected.value, [0, 1], [0, -3]) + pressed.value * 1.5;

    return {
      transform: [{ scale }, { translateY }],
      backgroundColor: interpolateColor(
        selected.value,
        [0, 1],
        ["#FFFFFF", "#d60007"],
      ),
      borderColor: interpolateColor(
        selected.value,
        [0, 1],
        ["#E2E8F0", "#d60007"],
      ),
      shadowOpacity: interpolate(selected.value, [0, 1], [0.06, 0.16]),
      shadowRadius: interpolate(selected.value, [0, 1], [4, 10]),
      elevation: interpolate(selected.value, [0, 1], [2, 6]),
    };
  });

  // styles for the text (color + small scale)
  const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(selected.value, [0, 1], ["#64748B", "#FFFFFF"]),
      transform: [
        {
          scale: interpolate(selected.value, [0, 1], [1, 1.03]),
        },
      ],
    };
  });

  return (
    <Pressable
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      // when pressing down → quick shrink
      onPressIn={() => {
        pressed.value = withTiming(1, { duration: 90 });
      }}
      // when releasing → bounce back
      onPressOut={() => {
        pressed.value = withSpring(0, {
          damping: 12,
          stiffness: 220,
        });
      }}
    >
      <Animated.View style={[styles.tag, containerStyle]}>
        <Animated.Text style={[styles.label, textStyle]}>{label}</Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

export function FeedFilter({
  items,
  selectedKey,
  onSelect,
  style,
}: FeedFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, style]}
    >
      {items.map((item) => (
        <Tag
          key={item.key}
          label={item.label}
          isSelected={item.key === selectedKey}
          onPress={() => onSelect(item.key)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    alignItems: "flex-start",
  },
  tag: {
    paddingHorizontal: 16,
    minHeight: 36,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 3 },
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
});
