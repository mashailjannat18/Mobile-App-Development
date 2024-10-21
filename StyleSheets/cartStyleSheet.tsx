import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f1f1f1',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
  },
  cartHeader: {
    paddingTop: 50,
    width: 500,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
    marginLeft: -150,
    backgroundColor: '#f1f1f1',
  },
  cartHeaderBorderBottom :{
    height: 5,
    backgroundColor: '#c84c02',
    width: 120,
  },
  cartHeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    height: 0.2,
    marginBottom: 25,
  },
  cartHeaderTitle: {
    fontSize: 26,
  },
  cartItem: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 5, 
    elevation: 5,
  },
  image: {
    aspectRatio: 0.95,
    height: 100,
    width: 100,
  },
  removeButton: {
    width: 83,
    marginTop: 9,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#c84c02'
  },
  emptyCartText: {
    marginTop: 250,
    fontSize: 20,
    marginLeft: 63,
    fontWeight: 'bold',
  },
});
