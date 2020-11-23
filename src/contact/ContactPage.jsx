import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AddIcon from 'assets/icons/AddIcon';
import SearchIcon from 'assets/icons/SearchIcon';
import { Colors, Spacing, Typography } from 'common/styles';
import { verticalScale } from 'common/styles/scales';
import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './contactActions';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(60),
  },
  separator: {
    height: 1,
    flex: 1,
    marginHorizontal: Spacing.verySmallScaled,
    backgroundColor: Colors.grey,
  },
  headerTitle: {
    ...Typography.headerTitle,
    fontWeight: 'bold',
  },
  headerBtn: {
    paddingHorizontal: Spacing.smallScaled,
  },
});

const ContactPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const contacts = useSelector((state) => state.contact.contacts);

  // Set Header Options
  useFocusEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.headerTitle}>Contacts</Text>,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerBtn}
        >
          <SearchIcon color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerBtn}
        >
          <AddIcon color={Colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useFocusEffect(() => {
    // trigger load contacts if empty
    dispatch(init());
  }, []);

  const renderSeparator = React.useCallback(() => (
    <View style={styles.separator} />
  ), []);

  const renderItem = React.useCallback((item) => (
    <Text>{`${item.firstName}  ${item.lastName}`}</Text>
  ), [contacts]);

  return (
    <FlatList
      data={contacts}
      ItemSeparatorComponent={() => renderSeparator()}
      renderItem={({ item }) => renderItem(item)}
    />
  );
};

export default ContactPage;
