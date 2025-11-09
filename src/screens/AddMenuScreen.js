import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../constants/styles';

const AddMenuScreen = ({ menuData, setMenuData }) => {
  const [dish, setDish] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const validateAndAdd = () => {
    if (!dish.trim()) return Alert.alert('Validation Error', 'Dish name is required.');
    if (!desc.trim()) return Alert.alert('Validation Error', 'Description is required.');
    if (!course) return Alert.alert('Validation Error', 'Please select a course.');
    if (!price.trim() || isNaN(price) || Number(price) <= 0) {
      return Alert.alert('Validation Error', 'Price must be a valid positive number.');
    }

    const newDish = {
      id: Date.now().toString(),
      name: dish.trim(),
      desc: desc.trim(),
      course,
      price: parseFloat(price),
    };

    setMenuData(prev => [...prev, newDish]);
    setDish('');
    setDesc('');
    setCourse('');
    setPrice('');
    Alert.alert('Success', 'Dish added successfully!');
  };

  const removeDish = (id) => {
    Alert.alert(
      'Remove Dish',
      'Are you sure you want to remove this dish?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Remove', 
          style: 'destructive',
          onPress: () => setMenuData(prev => prev.filter(item => item.id !== id))
        }
      ]
    );
  };

  const grouped = menuData.reduce((acc, item) => {
    if (!acc[item.course]) acc[item.course] = [];
    acc[item.course].push(item);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.logo}>👨‍🍳</Text>
        <Text style={styles.title}>Chef's Choice</Text>
        <Text style={styles.subtitle}>Fill Out The Dishes Details Below:</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dish}
          onChangeText={setDish}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={desc}
          onChangeText={setDesc}
        />

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={course}
            onValueChange={value => setCourse(value)}
            style={styles.picker}
          >
            <Picker.Item label="Select a Category..." value="" enabled={false} />
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Desserts" value="Desserts" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <TouchableOpacity style={styles.btn} onPress={validateAndAdd}>
          <Text style={styles.btnText}>Add Dish</Text>
        </TouchableOpacity>

        {/* Existing Menu Items Section */}
        {menuData.length > 0 && (
          <>
            <View style={styles.divider} />
            <Text style={styles.menuTitle}>Current Menu Items:</Text>
            {['Starters', 'Mains', 'Desserts'].map(course => (
              grouped[course] && grouped[course].length > 0 && (
                <View key={course}>
                  <Text style={styles.sectionHeader}>{course}</Text>
                  {grouped[course].map(item => (
                    <View key={item.id} style={styles.card}>
                      <View style={styles.itemRow}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>R {item.price.toFixed(2)}</Text>
                      </View>
                      <Text style={styles.itemDesc}>{item.desc}</Text>
                      <TouchableOpacity style={styles.removeBtn} onPress={() => removeDish(item.id)}>
                        <Text style={styles.removeText}>REMOVE</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddMenuScreen;

