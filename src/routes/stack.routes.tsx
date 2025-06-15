import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStackParamList';

// Screens
import Home from '../screens/Home/homeScreen';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
    </Navigator>
  );
};

export default StackRoutes;