import React, {FC, useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Header} from '../index';
import styles from './tab.styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {updateSelectedCategoryId} from '../../../redux/reducers/Categories';

type DataType = {
  categoryId: number;
  name: string;
};

type DonationsType = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: Array<number>;
  price: string;
};

type PaginationType = (
  items: Array<DataType>,
  pageNumber: number,
  pageSize: number,
) => DataType[];

const Tab: FC = () => {
  const dispatch = useDispatch();
  const cat = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);

  const [donationItems, setDonationItems] = useState<DonationsType[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<DataType[]>([]);
  const categoryPageSize = 4;

  const pagination: PaginationType = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(cat.categories, categoryPage, categoryPageSize));
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  useEffect(() => {
    const items = donations.items.filter(val => {
      cat.selectedCategoryId &&
        val.categoryIds.includes(cat.selectedCategoryId);
    });
    setDonationItems(items);
    console.log(items);
  }, [cat.selectedCategoryId]);

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
