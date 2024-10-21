import { View, Text, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useLocalSearchParams, Link } from 'expo-router';
import { styles } from '@/StyleSheets/itemDetailStyleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { ProductItem } from '@/typescript files/itemdetail';

export default function ProductDetail() {
  const { image, title, price } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);

  const imageUrl = Array.isArray(image) ? image[0] : image;
  const productTitle = Array.isArray(title) ? title[0] : title;
  const productPrice = Array.isArray(price) ? price[0] : price;

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const addToCart = async () => {
    const orderId = Date.now();
    const totalPrice = quantity * parseFloat(productPrice);

    const orderItem: ProductItem = {
      orderId: orderId,
      title: productTitle,
      image: imageUrl,
      price: parseFloat(productPrice),
      quantity: quantity,
      totalPrice: totalPrice,
    };

    try {
      const cartData = await AsyncStorage.getItem('cart');
      const cart = cartData ? JSON.parse(cartData) : [];
      const updatedCart = [...cart, orderItem];
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      Toast.show({
        text1: 'Item added to cart!',
        text2: `${productTitle} has been added to your cart.`,
      });
    } catch (error) {
      console.log('Error adding item to cart:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemDetailHeader}>
        <Link style={styles.backButton} href={{ pathname: '..' }}>
          <AntDesign name="arrowleft" size={27} color="gray" />
        </Link>
        <Text style={styles.itemDetailHeaderTitle}>{productTitle}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.price}>Price: {productPrice}</Text>

      <View style={styles.quantityContainer}>
        <Pressable onPress={decrement} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </Pressable>
        <Text style={styles.quantityText}>{quantity}</Text>
        <Pressable onPress={increment} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.addtocartButton}>
          <Pressable onPress={addToCart}>
            <Text style={styles.addtocartButtonText}>Add to cart</Text>
          </Pressable>
        </View>
      </View>

      <Toast />
    </View>
  );
}
