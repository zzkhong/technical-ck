import * as React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types';
import { Colors, Spacing, Typography } from 'common/styles';
import { scale } from 'common/styles/scales';
import { Avatar } from 'common/ui/Avatar';
import { FormikTextInput } from 'common/ui/TextInput';
import { Formik } from 'formik';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { submitInfo } from './editContactActions';

const styles = StyleSheet.create({
  container: {
  },
  headContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Spacing.baseVerticalScaled,
  },
  sectionContainer: {
    paddingHorizontal: Spacing.smallScaled,
    backgroundColor: Colors.grey,
    height: Spacing.baseVerticalScaled,
    justifyContent: 'center',
  },
  sectionText: {
    ...Typography.sectionLabel,
    fontWeight: 'bold',
  },
  headerLabel: {
    ...Typography.headerBtnLabel,
    color: Colors.primary,
  },
  headerBtn: {
    paddingHorizontal: Spacing.smallScaled,
  },
  separator: {
    height: 1,
    flex: 1,
    marginHorizontal: Spacing.verySmallScaled,
    backgroundColor: Colors.grey,
  },
});

const EditContactPage = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formikErrors, setFormikErrors] = React.useState({});
  const [formikSubmit, setFormikSubmit] = React.useState(null);

  const { contact } = route.params;

  const contacts = useSelector((state) => state.contact.contacts);
  const currentContact = React.useMemo(() => (
    contacts.find((c) => c === contact)
  ), [contacts, contact]);

  const inputGroup = React.useMemo(() => ([
    {
      title: 'Main Information',
      data: [
        {
          name: 'firstName', label: 'First Name', type: 'default', nextFocus: 'lastName',
        },
        {
          name: 'lastName', label: 'Last Name', type: 'default', nextFocus: 'email',
        },
      ],
    },
    {
      title: 'Sub Information',
      data: [
        {
          name: 'email', label: 'Email', type: 'email-address', nextFocus: 'phone',
        },
        { name: 'phone', label: 'PhoneNo', type: 'phone-pad' },
      ],
    },
  ]), []);

  useFocusEffect(() => {
    navigation.setOptions({
      headerTitle: () => <></>,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBtn}
        >
          <Text style={styles.headerLabel}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          disabled={!!Object.keys(formikErrors).length}
          onPress={() => {
            if (formikSubmit) {
              formikSubmit();
              navigation.goBack();
            }
          }}
          style={styles.headerBtn}
        >
          <Text style={styles.headerLabel}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, formikErrors, formikSubmit]);

  const renderSectionHeader = React.useCallback((title) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>{ title }</Text>
    </View>
  ), []);

  const renderItem = React.useCallback((item) => (
    <FormikTextInput
      name={item.name}
      label={item.label}
      keyboardType={item.type}
      returnKeyType={item.nextFocus ? 'next' : 'default'}
      focusNameOnBlur={item.nextFocus}
    />
  ), [contact, currentContact]);

  const renderSeparator = React.useCallback(() => (
    <View style={styles.separator} />
  ), []);

  // Set validation in here for header to get formik errors state
  const validateForm = React.useCallback((values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }

    setFormikErrors(errors);
    return errors;
  }, [formikErrors]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Avatar size={scale(100)} />
      </View>
      <Formik
        initialValues={{
          id: currentContact ? currentContact.id : null,
          firstName: currentContact ? currentContact.firstName : '',
          lastName: currentContact ? currentContact.lastName : '',
          email: currentContact ? currentContact.email : '',
          phone: currentContact ? currentContact.phone : '',
        }}
        onSubmit={(form) => dispatch(submitInfo(form))}
        validate={validateForm}
      >
        {({ handleSubmit }) => {
          if (!formikSubmit) {
          // pass formik submit state to state hooks
            setFormikSubmit(() => handleSubmit);
          }

          return (
            <SectionList
              sections={inputGroup}
              keyExtractor={(item, index) => item + index}
              ItemSeparatorComponent={() => renderSeparator()}
              renderItem={({ item }) => renderItem(item)}
              renderSectionHeader={({ section: { title } }) => renderSectionHeader(title)}
            />
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

EditContactPage.propTypes = {
  route: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
  }).isRequired,
};

export default EditContactPage;
