import * as React from 'react';
import { PropTypes } from 'prop-types';
import { Colors } from 'common/styles';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
});

const Avatar = ({
  size,
}) => (
  <View
    size={size}
    style={[styles.avatar, {
      height: size,
      width: size,
    }]}
  />
);

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Avatar;
