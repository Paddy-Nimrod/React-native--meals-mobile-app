import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meals Categories",
        }}
      />
      <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meal Details" component={MealDetailsScreen} options={{headerTitle:"meal "}} />
    </Stack.Navigator>
  );
}

export default MealsNavigator;
