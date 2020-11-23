import { scale, verticalScale } from './scales';

export const base = 25;
export const small = 12;
export const verySmall = 6;

export const baseScaled = scale(base);
export const smallScaled = scale(small);
export const verySmallScaled = scale(verySmall);

export const baseVerticalScaled = verticalScale(base);
export const smallVerticalScaled = verticalScale(small);
export const verySmallVerticalScaled = verticalScale(verySmall);
