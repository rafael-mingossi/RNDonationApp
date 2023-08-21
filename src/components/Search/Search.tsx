import React, {FC, useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './search.styles';
import {scaleFontSize} from '../../utils/scalling';

interface SearchProps {
  onSearch: (searchValue: string) => void;
  placeHolder?: string;
}

// MAYBE MOVE THE STATE CONTROL OUT OF THIS COMPONENT
// PASS AS PROPS, THE SEARCH STATE HERE HAS NO USE

const Search: FC<SearchProps> = props => {
  const inputRef = useRef<TextInput | null>(null);

  const [search, setSearch] = useState('');

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <Pressable style={styles.container} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
        style={styles.icon}
      />
      <TextInput
        placeholder={props.placeHolder || 'Search'}
        style={styles.input}
        ref={inputRef}
        value={search}
        onChangeText={val => handleSearch(val)}
      />
    </Pressable>
  );
};

export default Search;
