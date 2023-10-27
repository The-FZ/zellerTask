import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import {useQuery} from '@apollo/client';
import {
  GetAllCustomerListQuery,
  GetAllCustomerListQueryVariables,
} from './generated/graphql';
import {GetAllCustomerList} from './modules/queries/getCustomers';
import UserType from './src/components/UserType';
import UserList from './src/components/UserList';
import SearchBox from './src/components/SearchBox';

type userTypeData = {
  id: Number;
  label: String;
  value: String;
};

type User = {
  email: String;
  id: String;
  name: String;
  role: String;
  __typename: String;
};

type inputText = string;

function App(): JSX.Element {
  const [userType, setUserType] = useState<userTypeData>();
  const [isRefreshing, setRefrehing] = useState<boolean>(false);
  const [searchText, setSerchText] = useState<string>('');
  const [allData, setAllData] = useState<Array<User>>([]);

  const {data, loading, error} = useQuery<
    GetAllCustomerListQuery,
    GetAllCustomerListQueryVariables
  >(GetAllCustomerList, {
    variables: {
      filter: {
        role: {
          eq: userType?.value || '',
        },
      },
    },
  });

  const getUserType = (item: userTypeData) => {
    setUserType(item);
  };

  const handleRefresh = () => {
    setRefrehing(true);
    if (
      data &&
      data?.listZellerCustomers?.items &&
      data?.listZellerCustomers?.items.length > 0
    ) {
      setRefrehing(false);
    }
  };

  const searchTextHandler = (text: inputText) => {
    setSerchText(text);
    if (text !== '') {
      const {items = []} = data?.listZellerCustomers;
      let searchedData = items.filter((item: User) =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setAllData(searchedData);
    }
  };

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
          data={!!searchText ? allData : data?.listZellerCustomers?.items}
          selected={userType?.label}
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
