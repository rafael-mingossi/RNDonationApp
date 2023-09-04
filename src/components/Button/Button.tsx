import React, {FC, useRef, useState} from 'react';
import {Pressable, Text, PressableProps, ActivityIndicator} from 'react-native';
import styles from './button.styles';
import {horizontalScale} from '../../utils/scalling';

interface ButtonProps extends PressableProps {
  sizeBtn: 'sm' | 'md' | 'lg';
  sizeTxt: 'sm' | 'md' | 'lg';
  text: string;
  isDisabled?: boolean;
  isActive?: boolean;
  smallWidth?: boolean;
  isLoading?: boolean;
}

const defaultProps = {
  sizeBtn: 'md',
  sizeTxt: 'md',
  text: 'Default',
  isDisabled: false,
  isActive: true,
  smallWidth: false,
  isLoading: false,
};

const Button: FC<ButtonProps> = props => {
  const [width, setWidth] = useState(0);

  const txtRef = useRef(null);
  const paddingHorizontal = 33;
  //THIS WILL GRAB THE ACTUAL TEXT BTN WIDTH
  const btnWidth = {width: horizontalScale(paddingHorizontal * 2 + width)};

  const propsWithDefault = {
    ...defaultProps,
    ...props,
  };

  const {
    sizeBtn,
    sizeTxt,
    text,
    isDisabled,
    isActive,
    smallWidth,
    isLoading,
    ...rest
  } = propsWithDefault;

  const btnSizes = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };

  const txtSizes = {
    sm: styles.smTxt,
    md: styles.mdTxt,
    lg: styles.lgTxt,
  };

  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        btnSizes[sizeBtn],
        isDisabled && styles.disabled,
        isActive && styles.active,
        smallWidth && btnWidth,
      ]}
      disabled={isDisabled || false}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <Text
          onTextLayout={event => {
            setWidth(event.nativeEvent.lines[0].width);
          }}
          ref={txtRef}
          style={[
            styles.text,
            txtSizes[sizeTxt],
            isActive && styles.activeTxt,
          ]}>
          {text || 'Default'}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
