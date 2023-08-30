import React, {FC, useRef, useState} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {horizontalScale} from '../../utils/scalling';
import styles from './badge.styles';

interface BadgeProps {
  sizeBtn: 'sm' | 'md';
  sizeTxt: 'sm' | 'md';
  text: string | undefined;
  customStyle?: ViewStyle;
}

const defaultProps = {
  sizeBtn: 'md',
  sizeTxt: 'md',
  text: 'Default',
};

const Badge: FC<BadgeProps> = props => {
  const [width, setWidth] = useState(0);
  const txtRef = useRef(null);
  const paddingHorizontal = 10;
  const btnWidth = {width: horizontalScale(paddingHorizontal * 2 + width)};

  const propsWithDefault = {
    ...defaultProps,
    ...props,
  };

  const {sizeBtn, sizeTxt, text, customStyle} = propsWithDefault;

  const btnSizes = {
    sm: styles.sm,
    md: styles.md,
  };

  const txtSizes = {
    sm: styles.smTxt,
    md: styles.mdTxt,
  };

  return (
    <View style={[styles.container, btnWidth, btnSizes[sizeBtn], customStyle]}>
      <Text
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}
        style={[styles.text, txtSizes[sizeTxt]]}
        ref={txtRef}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;
