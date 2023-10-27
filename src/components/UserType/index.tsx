/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';

type itemType = {
  id: Number;
  label: String;
  value: String;
};

type props = {
  getUserType: (item: itemType) => void;
  selected: itemType;
};

const userTypes = [
  {
    id: 1,
    label: 'Admin',
    value: 'ADMIN',
  },
  {
    id: 2,
    label: 'Manager',
    value: 'MANAGER',
  },
];

const UserType: React.FC<props> = ({getUserType, selected}) => {
  const onSelectHandler = useCallback(
    (item: itemType) => {
      getUserType(item);
    },
    [getUserType],
  );

  const renderItem: ListRenderItem<itemType> = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => onSelectHandler(item)}
          style={[
            styles.userTypeContainer,
            {
              backgroundColor:
                selected && selected?.id === item?.id
                  ? '#e6f3ff'
                  : 'transparent',
            },
          ]}>
          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButton}>
              {selected?.id === item?.id && <View style={styles.innerCircle} />}
            </View>
          </View>
          <View>
            <Text style={styles.userTypeTextLabel}>{item?.label}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [onSelectHandler, selected],
  );

  const renderFooterComponent = () => {
    return <View style={styles.footer} />;
  };

  return (
    <View>
      <Text style={styles.userTypeText}>User Types</Text>
      <FlatList
        data={userTypes}
        keyExtractor={item => item.id + ''}
        renderItem={renderItem}
        style={styles.list}
        ListFooterComponent={renderFooterComponent}
      />
    </View>
  );
};

export default UserType;

const styles = StyleSheet.create({
  userTypeText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },

  userTypeContainer: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 8,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderColor: '#0084ff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    backgroundColor: '#0084ff',
    borderRadius: 6,
  },
  userTypeTextLabel: {alignSelf: 'center', fontSize: 18, marginLeft: 10},
  list: {marginTop: 20},
  radioButtonContainer: {justifyContent: 'center', alignItems: 'center'},
  footer: {height: 2, backgroundColor: '#b3b3b3', marginTop: 20},
});
