/* eslint-disable react/prop-types */
import * as React from 'react';
import { PropTypes } from 'prop-types';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import { Colors, Spacing, Typography } from 'common/styles';
import { scale, verticalScale } from 'common/styles/scales';
import { connect, getIn } from 'formik';

const FOCUS_FIELD_NAME = '_focusFieldName';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.verySmallVerticalScaled,
  },
  label: {
    width: scale(70),
    marginHorizontal: Spacing.smallScaled,
  },
  input: {
    borderRadius: 5,
    borderColor: Colors.grey,
    borderWidth: 1,
    marginHorizontal: Spacing.smallScaled,
    height: verticalScale(28),
  },
  invalidText: {
    ...Typography.invalidText,
    paddingStart: scale(100) + Spacing.smallScaled,
    color: Colors.red,
  },
});

const FormikTextInput = ({
  formik: {
    handleChange, handleBlur, values, errors, touched, setFieldValue,
  },
  name,
  label,
  returnKeyType,
  focusNameOnBlur,
  keyboardType,
}) => {
  const ref = React.useRef(null);
  const nextFocusValue = getIn(values, FOCUS_FIELD_NAME);

  const error = getIn(errors, name);
  const touch = getIn(touched, name);
  const value = getIn(values, name);
  const isInvalid = error && touch;

  React.useEffect(() => {
    if (ref.current && nextFocusValue === name) {
      ref.current.focus();
      setFieldValue(FOCUS_FIELD_NAME, undefined, false);
    }
  }, [nextFocusValue]);

  const onSubmit = React.useCallback(() => {
    if (focusNameOnBlur) {
      setFieldValue(FOCUS_FIELD_NAME, focusNameOnBlur, false);
    }
  }, [name, focusNameOnBlur]);

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>{ label }</Text>
        <TextInput
          style={[styles.input, styles.flex]}
          value={value}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          onSubmitEditing={onSubmit}
          ref={ref}
        />
      </View>
      {isInvalid && (<Text style={styles.invalidText}>{error}</Text>)}
    </>
  );
};

FormikTextInput.propTypes = ({
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  returnKeyType: PropTypes.string,
  focusNameOnBlur: PropTypes.string,
  keyboardType: PropTypes.string,
});

FormikTextInput.defaultProps = ({
  label: '',
  returnKeyType: 'default',
  focusNameOnBlur: null,
  keyboardType: 'default',
});

export default connect(FormikTextInput);
