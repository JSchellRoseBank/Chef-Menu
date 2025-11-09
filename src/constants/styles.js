import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    height: height,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginTop: 40,
    padding: 20,
  },
  logo: { 
    fontSize: 40, 
    textAlign: 'center' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginVertical: 10 
  },
  subtitle: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 20 
  },
  filterLabel: { 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  filterBtn: { 
    backgroundColor: '#000', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  filterText: { 
    color: '#fff', 
    textAlign: 'center' 
  },
  menuHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 
  },
  menuTitle: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  menuItem: { 
    marginVertical: 10, 
    borderBottomWidth: 1, 
    borderColor: '#000', 
    paddingBottom: 10 
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionHeader: { 
    fontWeight: 'bold', 
    fontSize: 18, 
    textDecorationLine: 'underline',
    marginBottom: 0,
    marginTop: 0,
  },
  averagePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  itemRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 5 
  },
  itemName: { 
    fontSize: 15, 
    fontWeight: '500' 
  },
  itemDesc: { 
    fontSize: 13, 
    color: '#555', 
    marginTop: 4 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#999', 
    borderRadius: 6, 
    padding: 10, 
    marginBottom: 12 
  },
  btn: { 
    backgroundColor: '#000', 
    padding: 14, 
    borderRadius: 8, 
    marginTop: 10 
  },
  btnText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontWeight: '500' 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 15,
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  removeBtn: { 
    backgroundColor: '#000', 
    padding: 10, 
    borderRadius: 6, 
    marginTop: 10 
  },
  removeText: { 
    color: '#fff', 
    textAlign: 'center' 
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    marginBottom: 12,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#000',
  },
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  clearBtn: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  clearText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

