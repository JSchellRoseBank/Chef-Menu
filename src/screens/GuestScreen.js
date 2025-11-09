import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { styles } from "../constants/styles";

const GuestScreen = ({ menuData }) => {
	const [filter, setFilter] = useState(null);
	const filteredMenu = filter
		? menuData.filter((i) => i.course === filter)
		: menuData;

	const grouped = filteredMenu.reduce((acc, item) => {
		if (!acc[item.course]) acc[item.course] = [];
		acc[item.course].push(item);
		return acc;
	}, {});

	// Calculate average price for a category
	const calculateAverage = (items) => {
		if (items.length === 0) return 0;
		const total = items.reduce((sum, item) => sum + item.price, 0);
		return total / items.length;
	};

	return (
		<SafeAreaView style={styles.screen}>
			<ScrollView contentContainerStyle={styles.scroll}>
				<Text style={styles.logo}>👨‍🍳</Text>
				<Text style={styles.title}>Chef's Choice</Text>
				<Text style={styles.subtitle}>
					Browse Our Menu Below{"\n"}or Choose Whatever Course You
					Want
				</Text>

				<View style={styles.filterHeader}>
					<Text style={styles.filterLabel}>Filter By:</Text>
					{filter && (
						<TouchableOpacity
							style={styles.clearBtn}
							onPress={() => setFilter(null)}
						>
							<Text style={styles.clearText}>Clear</Text>
						</TouchableOpacity>
					)}
				</View>
				{["Starters", "Mains", "Desserts"].map((c) => (
					<TouchableOpacity
						key={c}
						style={styles.filterBtn}
						onPress={() => setFilter(c)}
					>
						<Text style={styles.filterText}>{c}</Text>
					</TouchableOpacity>
				))}

				<View style={styles.menuHeader}>
					<Text style={styles.menuTitle}>Menu</Text>
					<Text>TOTAL ITEMS: {filteredMenu.length}</Text>
				</View>

				{Object.keys(grouped).map((course) => {
					const averagePrice = calculateAverage(grouped[course]);
					return (
						<View key={course}>
							<View style={styles.sectionHeaderContainer}>
								<Text style={styles.sectionHeader}>
									{course}
								</Text>
								<Text style={styles.averagePrice}>
									Avg: R {averagePrice.toFixed(2)}
								</Text>
							</View>
							{grouped[course].map((item) => (
								<View key={item.id} style={styles.menuItem}>
									<View style={styles.itemRow}>
										<Text style={styles.itemName}>
											{item.name}
										</Text>
										<Text>R {item.price.toFixed(2)}</Text>
									</View>
									<Text style={styles.itemDesc}>
										{item.desc}
									</Text>
								</View>
							))}
						</View>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
};

export default GuestScreen;
