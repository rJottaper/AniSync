import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../global/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWithFont}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWithFont: {
    fontSize: 32,
    fontFamily: 'Lexend-SemiBold',
    color: Colors.white
  }
});

export default Home;