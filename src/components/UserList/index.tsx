import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  RefreshControl,
} from 'react-native';
import {propTypes, User} from './types';

const UserList: React.FC<propTypes> = memo(
  ({
    data = [],
    selected = '',
    isRefreshing = false,
    handleRefresh = () => {},
  }) => {
    const renderItem: ListRenderItem<User> = ({item}) => {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.nameBox}>
            <Text style={styles.boxText}>{item?.name.charAt(0)}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.userName}>{item?.name}</Text>
            <Text style={{}}>{selected}</Text>
          </View>
        </View>
      );
    };

    const renderFooterComponent = () => {
      if (data.length > 0) {
        return <View style={styles.footer} />;
      }
    };

    const renderListEmptyComponent = () => {
      return (
        <View>
          <Text style={styles.emptyText}>Data not available</Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        {!!selected && (
          <Text style={styles.userTypeText}>{selected} Users</Text>
        )}
        <FlatList
          testID="flat-list"
          data={data}
          keyExtractor={item => item.id + ''}
          renderItem={renderItem}
          style={styles.list}
          ListFooterComponent={renderFooterComponent}
          ListEmptyComponent={renderListEmptyComponent}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      </View>
    );
  },
);

export default UserList;

const styles = StyleSheet.create({
  userTypeText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  footer: {height: 2, backgroundColor: '#b3b3b3', marginTop: 20},
  container: {
    marginTop: 20,
  },
  list: {marginTop: 20},
  itemContainer: {flexDirection: 'row'},
  nameBox: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 8,
    backgroundColor: '#e6f3ff',
  },
  textContainer: {
    marginLeft: 10,
    marginBottom: 10,
    padding: 5,
  },
  userName: {fontSize: 16, color: '#000'},
  boxText: {fontSize: 18, fontWeight: 'bold', color: '#0084ff'},
  emptyText: {fontSize: 16, padding: 20, textAlign: 'center'},
});
