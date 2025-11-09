import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
	const [menuData, setMenuData] = useState([]);

	return <AppNavigator menuData={menuData} setMenuData={setMenuData} />;
}
