import React, {FC} from 'react';
import styles from './backArrow.styles';
import {PressableProps, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {horizontalScale} from '../../utils/scalling';

const BackArrow: FC<PressableProps> = ({...rest}) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <FontAwesomeIcon icon={faArrowLeft} size={horizontalScale(18)} />
    </Pressable>
  );
};

export default BackArrow;
