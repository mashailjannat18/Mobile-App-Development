import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        marginTop: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 95,
        height: 120,
        width: 450,
      },
      menuHeading: {
        fontSize: 17,
        fontWeight: 'bold',
      },
      scrollContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10,
        paddingBottom: 5,
      },
      arrowButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      tabsContent: {
        flexDirection: 'row',
      },
      tabs: {
        alignItems: 'center',
      },
      tabItem: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 4,
        paddingHorizontal: 23, 
      },
      activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#c84c02',
      },
      tabText: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      activeTabText: {
        color: '#c84c02',
      },
      inactiveTabText: {
        color: 'gray',
      },
})