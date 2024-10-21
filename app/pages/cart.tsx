import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '@/StyleSheets/cartStyleSheet';
import { CartItem } from '@/typescript files/cart'

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          setCartItems(JSON.parse(cartData));
        }
      } catch (error) {
        console.log('Error loading cart items:', error);
      }
    };

    loadCartItems();
  }, []);

  const removeFromCart = async (orderId: number) => {
    try {
      const updatedCart = cartItems.filter(item => item.orderId !== orderId);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text>{item.title}</Text>
        <Text>Price: {item.totalPrice}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Pressable onPress={() => removeFromCart(item.orderId)}>
          <Text style={styles.removeButton}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        <Link href="..">
          <AntDesign name="arrowleft" size={27} color="gray" />
        </Link>
        <Text style={styles.cartHeaderTitle}>Cart</Text>
      </View>
      <View style={styles.cartHeaderStyle}>
        <View style={styles.cartHeaderBorderBottom}></View>
      </View>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.orderId.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
    </View>
  );
}
