import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const CustomTextInput = ({
  customTitle,
  icon,
  onShowPasswordPress,
  secureTextEntry,
  customValue,
  onChangeCustomText,
  multiline,
  numberOfLines,
  customInputStyle,
}) => {
  return (
    <View>
      <Text style={styles.titleText}>{customTitle}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={customValue}
          onChangeText={onChangeCustomText}
          style={[styles.inputStyles, customInputStyle]}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        <TouchableOpacity onPress={onShowPasswordPress} style={styles.icon}>
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: 'red',
    width: 300,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: CommonStyles.colors.white,
  },
  titleText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.grey3,
    marginVertical: 10,
  },
  // inputStyles: {
  //   height: 65,
  //   width: CommonStyles.width * 0.8,
  //   padding: 20,
  //   borderRadius: 10,
  // },

  inputStyles: {
    height: 60,
    width: CommonStyles.width * 0.8,
    padding: 20,
    borderRadius: 10,
  },

  icon: {position: 'absolute', right: 20},
});
