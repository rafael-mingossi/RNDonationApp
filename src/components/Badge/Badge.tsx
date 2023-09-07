import React, {FC, useRef, useState} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {horizontalScale} from '../../utils/scalling';
import styles from './badge.styles';

interface BadgeProps {
  sizeBtn: 'sm' | 'md';
  sizeTxt: 'sm' | 'md';
  text?: string;
  useInSmallCard?: boolean;
  customStyle?: ViewStyle;
}

const defaultProps = {
  sizeBtn: 'md',
  sizeTxt: 'md',
  useInSmallCard: false,
  text: 'Default',
};

const Badge: FC<BadgeProps> = props => {
  const [width, setWidth] = useState(0);
  const txtRef = useRef(null);
  const paddingHorizontal = 10;
  const btnWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

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
    <View style={[styles.container, btnSizes[sizeBtn], customStyle]}>
      <Text
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}
        style={[styles.text, txtSizes[sizeTxt]]}
        ref={txtRef}>
        {props.useInSmallCard
          ? text?.length > 21
            ? text?.slice(0, 21) + '...'
            : text
          : text}
      </Text>
    </View>
  );
};

export default Badge;
