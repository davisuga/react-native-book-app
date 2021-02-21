import React from "react";
import { View, TextField, Text, Button } from "react-native-ui-lib";

// import { Container } from './styles';
const shallowBooks = [
  {
    name: "Refactoring",
    price: 65,
  },
  { name: "The Mythical Men Mouth", price: 50 },
  { name: "eXtreme Programming", price: 70 },
];
const Home: React.FC = () => {
  return (
    <View>
      <Text title>Home</Text>
      {shallowBooks.map((book, index) => (
        <View key={index}>
          <Text>{book.name}</Text>
          <Text>{book.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Home;
