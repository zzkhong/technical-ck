/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

// Note: test renderer must be required after react-native.

// eslint-disable-next-line no-undef
it('renders correctly', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  renderer.create(<App />);
});
