import { Image, View, Text, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '@/StyleSheets/pizzaBurgerStyleSheet';
import { Link } from 'expo-router';
import { PizzaBurgerProps, itemType } from '@/typescript files/pizzaburger';

const Item = ({ item } : itemType) => (
    <Link 
      href={{
        pathname: `/pages/itemdetail/[id]`,
        params: { id: item.id.toString(), image: item.image, title: item.title, price: item.price }
      }} 
      style={styles.link}
    >

    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: item.image }}
          style={styles.image}
        />
        <MaterialIcons name="favorite-outline" size={27} color="#c84c02" style={styles.icon} />
      </View>
      
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </Link>  
);

export default function PizzaBurger({ myProps }: PizzaBurgerProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={myProps}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}
