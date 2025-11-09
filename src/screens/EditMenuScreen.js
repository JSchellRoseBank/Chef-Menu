import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../constants/styles';

const EditMenuScreen = ({ menuData, setMenuData }) => {
  const removeDish = id => setMenuData(prev => prev.filter(item => item.id !== id));

  const grouped = menuData.reduce((acc, item) => {
    if (!acc[item.course]) acc[item.course] = [];
    acc[item.course].push(item);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.menuTitle}>Menu Items:</Text>
        {menuData.length === 0 ? (
          <Text>No dishes added yet.</Text>
        ) : (
          Object.keys(grouped).map(course => (
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
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditMenuScreen;

