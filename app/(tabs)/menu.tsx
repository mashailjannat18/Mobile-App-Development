import React from 'react';
import { View } from 'react-native';
import { styles } from '@/StyleSheets/menuStyleSheet'
import pizzArray from '@/Data/PizzaDetail';
import PizzaBurger from '@/components/PizzaBurger';
import { AppHeader, HeaderTabs } from '@/components/AppHeader';

export default function Menu() {
  return (
    <View style={styles.headerContainer}>
      <AppHeader />
      <HeaderTabs />
    
      <View style={styles.contentContainer}>
        <PizzaBurger myProps={pizzArray} />
      </View>
    </View>
  );
}
