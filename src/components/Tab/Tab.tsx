import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Header} from '../index';
import styles from './tab.styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {updateSelectedCategoryId} from '../../../redux/reducers/Categories';

const Tab: FC = () => {
  const dispatch = useDispatch();
  // const [current, setCurrent] = useState('');
  const cat = useSelector((state: RootState) => state.categories);

  // current === item.name ? setCurrent('') : setCurrent(item.name);

  return (
    <View style={styles.container}>
      <Header size={'md'} text={'Select Category'} />
      <View style={styles.buttonsWrapper}>
        <FlatList
          data={cat.categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.buttonWrapper} key={item.categoryId}>
              <Button
                onPress={() => {
                  cat.selectedCategoryId !== item.categoryId
                    ? dispatch(updateSelectedCategoryId(item.categoryId))
                    : dispatch(updateSelectedCategoryId(null));
                }}
                sizeBtn={'md'}
                sizeTxt={'md'}
                text={item.name}
                smallWidth={true}
                isActive={cat.selectedCategoryId === item.categoryId}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Tab;
