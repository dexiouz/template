import { StyleSheet } from 'react-native';
import { colors } from '../../../colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  curve: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  adventureText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textView: { width: '50%', marginLeft: 20, marginBottom: 70 },
});
