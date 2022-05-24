<<<<<<< HEAD
# Desafio dio criando um app de lanterna usando sensor de movimento com React Native

## Criando um projeto 

### Iniciando um projeto com a CLI(Command Line Interface) do React Native

```
npx react-native init [nome-do-projeto]
```

- Concluindo a inicialização do projeto, vamos entrar na pasta do projeto criada e rodar o comando para inicializar o Metro Bundle(o qual vai compilar o JS e passar para o app conseguir renderizar):

```
npx react-native start
```

- Obs.: Antes de startar o android, é necessário se conectar ao IP do emulado, rodando o comando abaixo:

```
adb connect 10.0.2.2:5555
```

- Vamos deixar rodando o Metro e abrir um novo terminal no diretório do projeto e realizar a instalação do Android:

```
npx react-native run-android
```

## Instalando libs: Shake e Torch

### React Native Shake Event Detector

Com esta biblioteca/_lib_, podemos adicionar o detector de eventos de agitação no aplicativo React Native. 

- E para instalar ela vamos rodar o comando:

```
npm install react-native-shake
```

### React Native Torch

Um plugin React Native simples para ligar/desligar uma lanterna.

- E para instalar vamos rodar os comandos:

``` 
npm install --save react-native-torch
react-native link react-native-torch
```

## Baixando os ícones

Os ícones estão disponíveis no link: https://drive.google.com/drive/folders/1Kuh5tysH7-UFuSLHX0IQIIh2xcghHUIX.

- Baixando eles, vamos criar uma pasta chamada _assets_ na raíz do projeto, e dentro dela vamos criar a pasta _icons_ e nela vamos colar todos os ícones baixados no link supracitado.

## Alterando estrutura de pastas

- Na raíz do projeto vamos criar uma pasta _src_ e dentro dela criar um novo arquivo _App.js_.

- Dentro do arquivo _index.js_ vamos alterar a referência para o arquivo App para o novo que criamos dentro de _src_:

``` JS
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

- Isso ocasionou um erro no nosso emulador android. Para resolver esse problema, dentro do novo arquivo _App.js_ vamos criar uma constante _App_ que vai receber uma arrow funcion/_() =>_ que vai retornar/_return_ vazio/_null_ e em seguida exportar por padrão/_export default_ para que esse componente fique acessível:

``` JS
const App = () => {
  return null;
};

export default App;
```

- E para deixar tudo pronto para implementação de código JSX e dos componentes do react native, vamos importá-los:

``` JS
import React from 'react';
import {} from 'react-native';

const App = () => {
  return null;
};

export default App;
```

## Estilizando nosso app

- Vamos importar e adicionar o componente _View_ e criar a nossa constante _styles_ que vai receber a função _StyleSheet.create_ onde vamos passar os objetos de estilo:

``` JSX
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View></View>
  );
};

const styles = StyleSheet.create({
  
})

export default App;
```

- Em seguida, vamos passar a propriedade _style_ para a _View_ e adicionar a referência ao objeto de estilo _container_ que criamos para ela;

``` JSX
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

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
})

export default App;
```
=======

# dio-desafio-app-lanterna
>>>>>>> 96c94989ceadfb037c7a48eceffaf006b1b9819b
