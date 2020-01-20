import baseTheme from '@rebass/preset';
import { merge } from 'lodash';

const customTheme = {};

const theme = merge(baseTheme, customTheme);

export default theme;
