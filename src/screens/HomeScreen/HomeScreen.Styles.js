import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/AppConstants';

const styles = StyleSheet.create({
  loader: {
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  searchCardContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_TEXT,
    padding: 40,
    borderRadius: 50,
    margin: 16,
    elevation: 100,
  },
  input: {
    height: 40,
    borderColor: Colors.PRIMARY_BACKGROUND,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignSelf: 'center',
    margin: 8,
  },
  buttonText: {
    color: Colors.PRIMARY_TEXT,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo: {
    width: 44,
    height: 44,
    alignSelf: 'center',
    margin: 12,
  },
  motto: {
    color: Colors.PRIMARY_BACKGROUND,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
  datePicker: {
    width: 200,
    marginTop: 10,
  },
});
export default styles;
