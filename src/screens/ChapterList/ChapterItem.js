import React, { useRef } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';

import styles from './style';

const NUM_COLUMNS = 5;
const MARGIN = 6;

const ITEM_SIZE =
  (Dimensions.get('window').width - 32 - MARGIN * 2 * NUM_COLUMNS) /
  NUM_COLUMNS;

export default function ChapterItem({ index, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.92,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <Animated.View
        style={[
          styles.item,
          {
            width: ITEM_SIZE,
            height: ITEM_SIZE,
            margin: MARGIN,
            transform: [{ scale }],
          },
        ]}
      >
        <Text style={styles.itemText}>{index}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
