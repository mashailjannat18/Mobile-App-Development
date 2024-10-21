import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f8f8f8',
  },
  link: {
    margin: 7,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 135,
    aspectRatio: 1,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 8,
    padding: 5,
    borderRadius: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
    textAlign: 'center',
  },
});
