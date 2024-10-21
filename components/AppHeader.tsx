import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '@/StyleSheets/headerStyleSheet';
import { Link } from 'expo-router';

export function AppHeader() {
    return (
      <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="gray" />
          <Text style={styles.menuHeading}>Our Menu</Text>
          <Link
          href={{
            pathname: '/pages/cart',
          }}
        >
          <MaterialCommunityIcons name="cart-outline" size={24} color="gray" />
          </Link>
      </View>
    )
}

export function HeaderTabs() {
    const tabs = ['Meals', 'Sides', 'Snacks', 'Kid Specials', 'Deals', 'Beverages'];
    const scrollViewRef = useRef<ScrollView | null>(null);
    const [scrollX, setScrollX] = useState(0);
    const [activeTab, setActiveTab] = useState('Meals');
    const scrollAmount = 185;

    const scrollLeft = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: Math.max(scrollX - scrollAmount, 0), animated: true });
        setScrollX(prev => Math.max(prev - scrollAmount, 0));
      }
    };

    const scrollRight = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: scrollX + scrollAmount, animated: true });
        setScrollX(prev => prev + scrollAmount);
      }
    };

    const handleTabPress = (tab: string) => {
      setActiveTab(tab);
    };

    return (
      <View style={styles.scrollContainer}>
        <TouchableOpacity onPress={scrollLeft} style={styles.arrowButton}>
          <Entypo name="chevron-left" size={24} color="gray" />
        </TouchableOpacity>

        <ScrollView horizontal ref={scrollViewRef} contentContainerStyle={styles.tabs}
          onScroll={(event) => {
            setScrollX(event.nativeEvent.contentOffset.x);
          }}
        >

          <View style={styles.tabsContent}>
            {tabs.map(tab => (
              <TouchableOpacity key={tab}
                onPress={() => handleTabPress(tab)}
                style={[styles.tabItem, activeTab === tab && styles.activeTab]}
              >
                <Text style={[styles.tabText, activeTab === tab ? styles.activeTabText : styles.inactiveTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity onPress={scrollRight} style={styles.arrowButton}>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    )
}