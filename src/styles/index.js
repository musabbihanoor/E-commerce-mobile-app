import {StyleSheet} from 'react-native';
import {PrimaryColor, SecondaryColor, btnTextPrimary} from './theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 30,
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 16,
    marginVertical: 5,
  },

  input: {
    borderColor: PrimaryColor,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },

  inputFocused: {
    borderColor: SecondaryColor,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },

  btnPrimary: {
    backgroundColor: SecondaryColor,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },

  btnTextPrimary: {
    color: btnTextPrimary,
    fontSize: 16,
  },

  header: {
    backgroundColor: SecondaryColor,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    color: btnTextPrimary,
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 30,
    flex: 1,
  },

  product: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});

export default styles;
