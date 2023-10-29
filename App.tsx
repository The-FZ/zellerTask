import React, {useCallback, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import {useGetAllCustomerListQuery} from './generated/graphql';
import UserType from './src/components/UserType';
import UserList from './src/components/UserList';
import SearchBox from './src/components/SearchBox';
import {itemType, User, inputText} from './types';

function App(): JSX.Element {
  const [userType, setUserType] = useState<itemType>();
  const [isRefreshing, setRefrehing] = useState<boolean>(false);
  const [searchText, setSerchText] = useState<string>('');
  const [allData, setAllData] = useState<User[]>([]);

  const {data, loading, error} = useGetAllCustomerListQuery({
    variables: {
      filter: {
        role: {
          eq: userType?.value || '',
        },
      },
    },
  });

  const getUserType = useCallback((item: itemType) => {
    setUserType(item);
  }, []);

  const handleRefresh = useCallback(() => {
    setRefrehing(true);
    if (
      data &&
      data?.listZellerCustomers?.items &&
      data?.listZellerCustomers?.items.length > 0
    ) {
      setRefrehing(false);
    }
  }, [data]);

  const searchTextHandler = useCallback(
    (text: inputText) => {
      setSerchText(text);
      if (text !== '') {
        const {items} = data?.listZellerCustomers;
        let searchedData = items.filter((item: User) =>
          item.name.toLowerCase().includes(text.toLowerCase()),
        );
        setAllData(searchedData);
      }
    },
    [data?.listZellerCustomers],
  );

  if (error) {
    Alert.alert('Something went wrong');
  }
  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBox
          searchTextHandler={searchTextHandler}
          searchText={searchText}
        />
        <UserType getUserType={getUserType} selected={userType} />
        <UserList
          data={searchText ? allData : data?.listZellerCustomers?.items}
          selected={userType?.label || ''}
          isRefreshing={isRefreshing}
          handleRefresh={handleRefresh}
        />
      </SafeAreaView>
    );
  }
  if (loading || isRefreshing) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0084ff" />
      </View>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
