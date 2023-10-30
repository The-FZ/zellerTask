import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {searchBoxPropTypes, inputTextType} from '../../../types';

const SearchBox: React.FC<searchBoxPropTypes> = ({searchTextHandler}) => {
  const [inputText, setInputText] = useState<string>('');
  const onHandleTextChange = (text: inputTextType) => {
    setInputText(text);
    searchTextHandler(text);
  };
  const clearText = () => {
    setInputText('');
    searchTextHandler('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={inputText}
        onChangeText={onHandleTextChange}
        style={styles.searchBox}
      />
      <TouchableOpacity onPress={clearText} style={styles.button}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 50,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#0084ff',
    borderRadius: 8,
    flex: 1,
    fontSize: 20,
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#0084ff',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
