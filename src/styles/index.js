import {StyleSheet} from 'react-native';
import {PrimaryColor, SecondaryColor, btnTextPrimary} from './theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 30,
  },

  heading: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#21282F',
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 16,
    marginVertical: 5,
  },

  input: {
    borderColor: '#ccc',
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
    backgroundColor: 'transparent',
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

  categoryList: {
    marginLeft: 20,
    marginBottom: 10,
  },

  category: {
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  categoryText: {
    fontSize: 16,
    color: '#A2A0A1',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 15,
  },

  categoryTextSelected: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  productGrid: {
    flexDirection: 'row',
  },

  gridItem: {
    width: 150,
    marginLeft: 10,
  },

  gridImg: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },

  gridText: {
    fontFamily: 'Poppins-SemiBold',
  },

  gridPrice: {
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
