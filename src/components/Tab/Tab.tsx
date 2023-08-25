import React, {FC, useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Header} from '../index';
import styles from './tab.styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {updateSelectedCategoryId} from '../../../redux/reducers/Categories';
import {pagination} from '../../utils/pagination';

type DataType = {
  categoryId: number;
  name: string;
};

const Tab: FC = () => {
  const dispatch = useDispatch();
  const cat = useSelector((state: RootState) => state.categories);

  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<DataType[]>([]);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(cat.categories, categoryPage, categoryPageSize));
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  return (
    <View style={styles.container}>
      <Header size={'md'} text={'Select Category'} />
      <View style={styles.buttonsWrapper}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingCategories) {
              return;
            }

            setIsLoadingCategories(true);
            let newData = pagination(
              cat.categories,
              categoryPage,
              categoryPageSize,
            );
            if (newData.length > 0) {
              setCategoryList(prevState => [...prevState, ...newData]);
              setCategoryPage(prevState => prevState + 1);
            }
            setIsLoadingCategories(false);
          }}
          data={categoryList}
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
