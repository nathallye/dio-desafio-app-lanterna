import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    // Essa função vai ser chamada com o componente for ser desmontado
    return () => subscription.remove;
  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image 
          style={toggle ? styles.lightingOn : styles.lightingOff} 
          source={
            toggle 
            ? require('../assets/icons/eco-light.png') 
            : require('../assets/icons/eco-light-off.png')
          } 
          />
        <Image 
          style={styles.logoDio} 
          source={
            toggle 
            ? require('../assets/icons/logo-dio.png') 
            : require('../assets/icons/logo-dio-white.png')
          } 
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain', // mesmo que a imagem seja maior que o tamanho definido ela vai se adequar no espaço delimitado
    alignSelf: 'center',
    height: 150, // valor em px
    width: 150, 
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white', // ele consegue trocar a cor da imagem com a cor que passarmos
    height: 150, 
    width: 150, 
  },
  logoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 200, 
    width: 200, 
  },
})

export default App;