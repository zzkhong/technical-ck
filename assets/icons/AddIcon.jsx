import React from 'react';
import { PropTypes } from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Colors } from 'common/styles';

const AddIcon = ({
  color,
  ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Svg height={24} viewBox="0 0 24 24" width={24} {...props}>
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path
      strokeWidth={2}
      fill={color}
      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    />
  </Svg>
);

AddIcon.propTypes = ({
  color: PropTypes.string,
});

AddIcon.defaultProps = ({
  color: Colors.black,
});

export default AddIcon;
