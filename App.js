import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from "./src/screens/TelaDeCadastro/RegisterScreen";
import LoginScreen from "./src/screens/Login/LoginScreen";
import TelaInicial from './src/screens/TelaInicial';
import Categorias from './src/screens/Categorias';
import GuiasDeEstudos from './src/screens/GuiasDeEstudos';
import Licoes from './src/screens/Licoes';
import Introducao from './src/screens/Introducao';
import Questionario from './src/screens/Questionario';
import Conclusao from './src/screens/Conclusao';
import Resultado from './src/screens/Resultado';
import UsersManagement from './src/screens/UsersManagement';

import BookList from './src/screens/BookList';
import ChapterList from './src/screens/ChapterList';
import Verse from './src/screens/Verse';

import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Playfair-Display': require('./assets/fonts/PlayfairDisplay-BlackItalic.ttf'),
    'Playfair_144pt-Bold': require('./assets/fonts/Playfair_144pt-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),  
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),    
    'PottaOne-Regular': require('./assets/fonts/PottaOne-Regular.ttf'),    
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />  

        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="GuiasDeEstudos" component={GuiasDeEstudos} />
        <Stack.Screen name="Licoes" component={Licoes} />
        <Stack.Screen name="Introducao" component={Introducao} />
        <Stack.Screen name="Questionario" component={Questionario} />
        <Stack.Screen name="Conclusao" component={Conclusao} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="UsersManagement" component={UsersManagement} />

        <Stack.Screen name="Books" component={BookList} options={{ title: 'Bíblia' }} />
        <Stack.Screen name="Chapters" component={ChapterList} options={{ title: 'Capítulos' }} />
        <Stack.Screen name="Verses" component={Verse} options={{ title: 'Versículos' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}