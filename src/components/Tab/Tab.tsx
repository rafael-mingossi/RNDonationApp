import React, {FC, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Header} from '../index';
import styles from './tab.styles';

const categories = ['Highlight', 'Lifestyle', 'Education', 'Hobby'];

const Tab: FC = () => {
  const [current, setCurrent] = useState('');
  return (
    <View style={styles.container}>
      <Header size={'md'} text={'Select Category'} />

      <ScrollView
        contentContainerStyle={styles.buttonsWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categories.map(label => (
          <View style={styles.buttonWrapper}>
            <Button
              onPress={() =>
                current === label ? setCurrent('') : setCurrent(label)
              }
              sizeBtn={'md'}
              sizeTxt={'md'}
              text={label}
              smallWidth={true}
              isActive={current === label}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tab;
