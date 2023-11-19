// Atividade 3
// Exemplo SCROLLVIEW
// Alexandre Fernandez - RA10482120706

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';

const logoProjetoTeste = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={logoProjetoTeste} style={{ width: 400, height: 400 }} />
          <Text> O componente ScrollView é uma parte fundamental do desenvolvimento em React Native, projetado para facilitar a rolagem de conteúdo em aplicativos móveis. Ele oferece uma solução eficiente para exibir grandes conjuntos de dados ou conteúdos que excedem o espaço disponível na tela, permitindo que os usuários naveguem pela informação de forma fluida. Vamos explorar algumas das características e melhores práticas ao trabalhar com o ScrollView em React Native. </Text>
          <Text> O componente ScrollView é uma parte fundamental do desenvolvimento em React Native, projetado para facilitar a rolagem de conteúdo em aplicativos móveis. Ele oferece uma solução eficiente para exibir grandes conjuntos de dados ou conteúdos que excedem o espaço disponível na tela, permitindo que os usuários naveguem pela informação de forma fluida. Vamos explorar algumas das características e melhores práticas ao trabalhar com o ScrollView em React Native. </Text>

          <Image source={logoProjetoTeste} style={{ width: 300, height: 300 }} />
          <Text> O componente ScrollView é uma parte fundamental do desenvolvimento em React Native, projetado para facilitar a rolagem de conteúdo em aplicativos móveis. Ele oferece uma solução eficiente para exibir grandes conjuntos de dados ou conteúdos que excedem o espaço disponível na tela, permitindo que os usuários naveguem pela informação de forma fluida. Vamos explorar algumas das características e melhores práticas ao trabalhar com o ScrollView em React Native. </Text>
          <Text> O componente ScrollView é uma parte fundamental do desenvolvimento em React Native, projetado para facilitar a rolagem de conteúdo em aplicativos móveis. Ele oferece uma solução eficiente para exibir grandes conjuntos de dados ou conteúdos que excedem o espaço disponível na tela, permitindo que os usuários naveguem pela informação de forma fluida. Vamos explorar algumas das características e melhores práticas ao trabalhar com o ScrollView em React Native. </Text>
          <Image source={logoProjetoTeste} style={{ width: 300, height: 300 }} />

          <Text> O componente ScrollView é uma parte fundamental do desenvolvimento em React Native, projetado para facilitar a rolagem de conteúdo em aplicativos móveis. Ele oferece uma solução eficiente para exibir grandes conjuntos de dados ou conteúdos que excedem o espaço disponível na tela, permitindo que os usuários naveguem pela informação de forma fluida. Vamos explorar algumas das características e melhores práticas ao trabalhar com o ScrollView em React Native. </Text>
          <Text> O componente ScrollView é uma parte fundamental do desenvolvimento em React Native, projetado para facilitar a rolagem de conteúdo em aplicativos móveis. Ele oferece uma solução eficiente para exibir grandes conjuntos de dados ou conteúdos que excedem o espaço disponível na tela, permitindo que os usuários naveguem pela informação de forma fluida. Vamos explorar algumas das características e melhores práticas ao trabalhar com o ScrollView em React Native. </Text>
          <Image source={logoProjetoTeste} style={{ width: 300, height: 300 }} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
});
