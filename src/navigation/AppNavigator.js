import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GuestScreen, AddMenuScreen } from "../screens";

const Tab = createBottomTabNavigator();

const AppNavigator = ({ menuData, setMenuData }) => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: "#000",
						height: 70,
						paddingTop: 10,
						paddingBottom: 10,
					},
					tabBarActiveTintColor: "#fff",
					tabBarInactiveTintColor: "#aaa",
					tabBarLabelStyle: {
						fontSize: 16,
						fontWeight: "600",
						paddingHorizontal: 12,
						paddingVertical: 8,
					},
					tabBarItemStyle: {
						justifyContent: "center",
						alignItems: "center",
						paddingHorizontal: 16,
					},
					tabBarIconStyle: {
						display: "none",
					},
					tabBarLabelPosition: "below-icon",
				}}
			>
				<Tab.Screen
					name="Guest"
					options={{
						tabBarIcon: () => null,
					}}
				>
					{() => <GuestScreen menuData={menuData} />}
				</Tab.Screen>
				<Tab.Screen
					name="Manage Menu"
					options={{
						tabBarIcon: () => null,
					}}
				>
					{() => (
						<AddMenuScreen
							menuData={menuData}
							setMenuData={setMenuData}
						/>
					)}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
