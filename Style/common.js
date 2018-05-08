import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
  container: {
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  row: {
    margin: 2,
    padding: 10,
    borderRadius: 2,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
