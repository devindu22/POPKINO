import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const ActionButton = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
  icon,
}) => {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressBtn}>
      {icon}
      <Text
        style={[{fontFamily: CommonStyles.fontFamily.medium}, customTextStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
