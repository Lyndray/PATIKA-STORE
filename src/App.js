import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  columns
} from 'react-native';
import Card from './Card/Card';
import products_data from './products.json';

function App() {
  const renderCards = ({ item }) => <Card product={item} />
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.textInput} placeholder={'Ara...'} />
      <FlatList
        data={products_data}
        renderItem={renderCards}
        numColumns={columns ? 1 : 2}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
    borderRadius: 10,
    margin: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginVertical: 10,
    color: 'purple'

  }
})
export default App;
