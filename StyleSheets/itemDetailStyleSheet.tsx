import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backButton: {
      marginLeft: -47,
    },
    itemDetailHeader: {
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: -10,
    },
    itemDetailHeaderTitle: {
      fontSize: 26,
      textAlign: 'center',
      marginTop: 30,
      paddingBottom: 23,
      borderBottomWidth: 7,
      borderBottomColor: '#c84c02',
      width: 225,
      marginLeft: 27,
    },
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode: 'cover',
    },
    size: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    innersize: {
      borderColor: 'black',
      aspectRatio: 1,
      width: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sizeText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sizeInches: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
    },
    buttonContainer: {
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addtocartButton: {
      width: 200,
      height: 65,
      backgroundColor: '#c84c02',
      borderRadius: 10,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addtocartButtonText: {
      color: 'white',
      fontSize: 25,
    },
    price: {
      textAlign: 'center',
      fontSize: 23,
      marginTop: 15, 
      marginBottom: 15, 
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 1,
    },
    quantityButton: {
      backgroundColor: '#c84c02',
      padding: 10,
      paddingRight: 15,
      paddingLeft: 15,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    quantityButtonText: {
      color: '#fff',
      fontSize: 20,
    },
    quantityText: {
      fontSize: 20,
      marginHorizontal: 10,
    },
});
  