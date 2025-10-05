// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Tab = createBottomTabNavigator();
const { height } = Dimensions.get('window');

const menuData = [
];

const HomePageGuest = () => {
  const [filter, setFilter] = useState(null);
  const filteredMenu = filter ? menuData.filter(i => i.course === filter) : menuData;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.logo}>👨‍🍳</Text>
        <Text style={styles.title}>Chef’s Choice</Text>
        <Text style={styles.subtitle}>
          Browse Our Menu Below{'\n'}or Choose Whatever Course You Want
        </Text>

        <Text style={styles.filterLabel}>Filter By:</Text>
        {['Starters', 'Mains', 'Desserts'].map(c => (
          <TouchableOpacity key={c} style={styles.filterBtn} onPress={() => setFilter(c)}>
            <Text style={styles.filterText}>{c}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.menuHeader}>
          <Text style={styles.menuTitle}>Menu</Text>
          <Text>TOTAL ITEMS: {filteredMenu.length}</Text>
        </View>

        {filteredMenu.map(item => (
          <View key={item.id} style={styles.menuItem}>
            <Text style={styles.course}>{item.course}</Text>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>R {item.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.itemDesc}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const HomePageChef = () => {
  const [dish, setDish] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.logo}>👨‍🍳</Text>
        <Text style={styles.title}>Chef’s Choice</Text>
        <Text style={styles.subtitle}>Fill Out The Dishes Details Below:</Text>

        <TextInput style={styles.input} placeholder="Dish Name" value={dish} onChangeText={setDish} />
        <TextInput style={styles.input} placeholder="Description" value={desc} onChangeText={setDesc} />
        <Picker selectedValue={course} onValueChange={setCourse} style={styles.input}>
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add Dish</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const ChefMenu = () => (
  <SafeAreaView style={styles.screen}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.menuTitle}>Menu Items:</Text>
      {menuData.map(item => (
        <View key={item.id}>
          <Text style={styles.courseHeader}>{item.course.toUpperCase()}:</Text>
          <View style={styles.card}>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>R {item.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.itemDesc}>{item.desc}</Text>
            <TouchableOpacity style={styles.removeBtn}>
              <Text style={styles.removeText}>REMOVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#aaa',
        }}
      >
        <Tab.Screen name="Guest" component={HomePageGuest} />
        <Tab.Screen name="Chef" component={HomePageChef} />
        <Tab.Screen name="Menu" component={ChefMenu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  logo: { fontSize: 40, textAlign: 'center' },
  title: { fontSize: 26, fontWeight: '600', textAlign: 'center', marginVertical: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  filterLabel: { fontWeight: 'bold', marginBottom: 10 },
  filterBtn: { backgroundColor: '#000', padding: 12, borderRadius: 8, marginBottom: 10 },
  filterText: { color: '#fff', textAlign: 'center' },
  menuHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  menuTitle: { fontSize: 20, fontWeight: 'bold' },
  menuItem: { marginVertical: 10, borderBottomWidth: 1, borderColor: '#000', paddingBottom: 10 },
  course: { fontWeight: 'bold', fontSize: 16 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  itemName: { fontSize: 15, fontWeight: '500' },
  itemDesc: { fontSize: 13, color: '#555', marginTop: 4 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 10, marginBottom: 12 },
  btn: { backgroundColor: '#000', padding: 14, borderRadius: 8, marginTop: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: '500' },
  courseHeader: { fontWeight: 'bold', textDecorationLine: 'underline', marginTop: 20 },
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
  removeBtn: { backgroundColor: '#000', padding: 10, borderRadius: 6, marginTop: 10 },
  removeText: { color: '#fff', textAlign: 'center' },
});
