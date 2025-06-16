
import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const produtos = [
  { id: '1', nome: 'Porta madeira envernizada quarto', preco: 'R$299', imagem: require('./assets/porta1.png'), avaliacao: '4.5' },
  { id: '2', nome: 'Porta Interna Lisa Envernizada Mogno', preco: 'R$208,85', imagem: require('./assets/porta2.png'), avaliacao: '3.9' },
  { id: '3', nome: 'Porta de Madeira Maciça BBB Visor', preco: 'R$597,92', imagem: require('./assets/porta3.png'), avaliacao: '5.0' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} placeholder="Buscar produtos" />

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.price}>{item.preco}</Text>
              <Text style={styles.rating}>⭐ {item.avaliacao}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  search: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: '#00a859',
    marginTop: 5,
  },
  rating: {
    marginTop: 5,
    color: '#ffb400',
  },
});
