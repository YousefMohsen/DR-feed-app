import {
    Pressable,
    ScrollView,
    StyleProp,
    StyleSheet,
    Text,
    ViewStyle,
} from "react-native";

type FilterItem = {
  key: string;
  label: string;
};

type FeedFilterProps = {
  items: FilterItem[];
  selectedKey: string;
  onSelect: (key: string) => void;
  style?: StyleProp<ViewStyle>;
};

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
      {items.map((item) => {
        const isSelected = item.key === selectedKey;
        return (
          <Pressable
            key={item.key}
            onPress={() => onSelect(item.key)}
            style={[styles.tag, isSelected && styles.selectedTag]}
          >
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
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
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedTag: {
    backgroundColor: "#d60007",
  },
  label: {
    color: "#64748B",
  },
  labelSelected: {
    color: "#FFFFFF",
  },
});
