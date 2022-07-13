import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    height: 45,
    width: '100%',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});
