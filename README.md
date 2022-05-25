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
import { View, StyleSheet } from 'react-native';

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
import { View, StyleSheet } from 'react-native';

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

- E vamos criar um novo objeto de estilo para a _View_ chamado _containerLight_. E os objetos de estilo sejam chamados de acordo com a opção do usuário, sendo assim, se a const alternancia/_toggle_ for _true_ o _style_ vai receber _styles.containerLight_ senão/se for _false_ ele recebe _styles.container_:

``` JSX
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  const toggle = true;

  return (
    <View style={toggle ? styles.containerLight : styles.container}>

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
})

export default App;
```

- Em seguida, vamos adicionar um componente _Image_ para adicionarmos nossa imagem.Temos duas opções, importar/_import_ primeiro e referênciar dentro do _source_ o nome que atribuimos a esse import, ou realizar um _require_ diretamente no _source_, vamos ficar com a segunda opção:

``` JSX
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// import ecoLight from '../assets/icons/eco-light.png';

const App = () => {
  const toggle = true;

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <Image 
        source={require('../assets/icons/eco-light.png')}
        // source={ecoLight}
      />
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
})

export default App;
```

- Vamos também, criar um objeto de estilo para quando a iluminação estiver ligada/_lightingOn_ e outro para quando a iluminação estiver desligada/_lightingOff_. Em seguida vamos aplicar no componente _Imagem_ de acordo com o _toggle_, se ele for _true_ então o _style_ vai receber _styles.lightingOn_ senão/for _false_ ele vai receber _styles.lightingOff_:

```JSX
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const App = () => {
  const toggle = true;

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <Image 
        style={toggle ? styles.lightingOn : styles.lightingOff} 
        source={require('../assets/icons/eco-light.png')} 
      />
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
})

export default App;
```

- E vamos implentar a lógica para trocar a imagem de acordo com o _toggle_, no _source_ caso o _toggle_ seja _true_ vamos dar um _require_ na imagem _eco-light_ se não(caso seja _false_) vamos dar o _require_ na imagem _eco-light-off_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const App = () => {
  const toggle = true;

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <Image 
        style={styles.lightingOn} 
        source={
          toggle 
            ? require('../assets/icons/eco-light-off.png') 
            : require('../assets/icons/eco-light.png')
          } 
      />
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
})

export default App;
```

- Em seguida, vamos criar um novo componente _Image_ e vamos criar um objeto de estilo para ele chamado _logoDio_. E seguindo a mesma lógica aplicada anteriormente, caso o _toggle_ seja _true_ o _source_ vai receber o _require_ da imagem _logo-dio_ caso contrário/seja _false_ vai receber o _require_ da imagem _logo-dio-white_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const App = () => {
  const toggle = true;

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
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
```

- E agora, vamos criar um botão. 
Primeiramente, vamos importar o componente do react native chamado _TouchableOpacity_, quando o usuário apertar ele vai gerar um efeito de opacidade.
Em seguida, vamos envolver os dois componentes _Image_ com ele... e dentro desse componente _TouchableOpacity_ vamos passar o evento _onPress={}_, desse modo iremos conseguir trocar o valor do _toggle_ através de uma arraw function(por enquanto não vamos implementar o toggle, pois vamos usar o _useState_ a seguir para isso):

``` JSX
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const toggle = false;

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={() => {}}>
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
```

## useState

- Como o react só reflete mundanças na interface quando temos a mudança do estado, vamos importar e usar o hook _useState_ para a variável _taggle_. Vamos passar o valor inicial para _toggle_ como _false_ e o _setToggle_ vai receber a função que irá alterar o estado de _toggle_:

``` JSX
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={() => {}}>
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

// [...]

export default App;
```

- E agora, podemos passar a função _setToggle_ para o evento _onPress_, onde essa função vai receber uma função callback que vai pegar o valor antigo/_oldToggle_ e vai retornar/_return_ o contrário/_!oldToggle_:

``` JSX
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={() => {
        setToggle(oldToggle => {
          return !oldToggle;
        })
        // Podemos usar arrow funcion para simplificar, assim:
        // setToggle(oldToggle => !oldToggle);
      }}>
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

// [...]

export default App;
```

- Para concluir, como não é uma boa prática colocarmos a função diretamente dentro do evento, pois não sabemos o contexto dela, vamos criar uma função callback.
Vamos criar uma const chamada _handleOnPress_ e vamos passar para ela uma função arrow e dentro dela vamos inserir o conteúdo que inserimos diretamente no evento _onPress_.
E no _onPress_ ao invés de passar toda essa função, vamos passar o _handleOnPress_:

``` JSX
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = function() {
    setToggle(oldToggle => !oldToggle);
  };
  // Podemos usar arrow funcion para simplificar, assim:
  // const handleOnPress = () => setToggle(oldToggle => !oldToggle);

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

// [...]

export default App;
```

## useEffect

- Vamos usar o _useEffect_ para escutar as alterações do estado do _toggle_. Precisamos disso para conseguirmos ligar o flash do celular.
Para isso, vamos importar o hook _useEffect_ do react, e em seguida vamos usar a função _useEffect_ passando o _toggle_ como dependência e uma função callback que vai ser chamada quando o estado de _toggle_ for alterado:

``` JSX
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = function() {
    setToggle(oldToggle => !oldToggle);
  };

  useEffect(function() {
    // Liga flash do celular(controlado pela lib Touch)
  }, [toggle]);

  // Podemos usar arrow funcion para simplificar, assim:
  // useEffect(() => {
    // Liga flash do celular
  // }, [toggle]);

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

// [...]

export default App;
```

## Usando a lib Touch

- Primeiramente, vamos importar o _Torch_ do react native touch.
Em seguida, dentro do _useEffect_ vamos passa _Touch.switchState_, o qual se receber _true_ vai ligar a lanterna do celular e se receber _false_ vai desligar a lanterna do celular. Então, ele irá receber o próprio _toggle_ que já tem os valores(true/false) de acordo com os cliques que o usuário irá dá na tela(liga/desliga):

``` JSX
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = function() {
    setToggle(oldToggle => !oldToggle);
  };

  useEffect(function() {
    Torch.switchState(toggle);
  }, [toggle]);

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

// [...]

export default App;
```

## Usando a lib Shake

Essa lib que irá informar quando trocar o estado de _toggle_ de acordo com o "balançar" do celular. Ela irá ouvir o evento nativo de quando o celular é "chacoalhado".

- Primeiramente, vamos importar o _RNShake_ do react native shake.
Em seguida, vamos criar outro _useEffect_ e ele irá receber uma função callback e ela vai ouvir quando o celular balançar, para isso vamos inserir uma inscrição de um evento... criando uma const chamada _subscription_ que vai receber um evento que vai vir do _RNShake_ e ele vai chamar o método que vai adicionar "alguém para ouvir" _.addListener_:

``` JSX
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = function() {
    setToggle(oldToggle => !oldToggle);
  };

  useEffect(function() {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(function() {
    const subscription = RNShake.addListener(function() {
      
    }, []);
  });

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

// [...]

export default App;
```

- E esse método _RNShake.addListener_ vai receber uma função callback para saber o que fazer com esse evento, no caso, se ele ouvir ele vai chamar o _setToggle_ o qual vai receber o valor antigo/_oldToggle_ e retornar o contrário/_!oldToggle_:

``` JSX
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = function() {
    setToggle(oldToggle => !oldToggle);
  };

  useEffect(function() {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(function() {
    const subscription = RNShake.addListener(function() {
      setToggle(oldToggle => !oldToggle);
    });
  }, []);

  // Podemos usar arrow funcion para simplificar, assim:
  // useEffect(() =>
  //   const subscription = RNShake.addListener(() => {
  //     setToggle(oldToggle => !oldToggle);
  //   });
  // }, []);

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

// [...]

export default App;
```

- Uma coisa que devemos saber é que, toda vez que colocarmos um evento, temos que remover o ouvinte dele, senão, toda vez que o componente renderizar ele vai ficar ouvindo.
Para isso, vamos usar o método _remove_ que todo evento tem, que ele vai se auto-remover como ouvinte:

``` JSX
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = function() {
    setToggle(oldToggle => !oldToggle);
  };

  useEffect(function() {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(function() {
    const subscription = RNShake.addListener(function() {
      setToggle(oldToggle => !oldToggle);
    });

    // Essa função vai ser chamada com o componente for ser desmontado
    return function() {
      subscription.remove;
    }
    // Podemos usar arrow funcion para simplificar, assim:
    // return () => subscription.remove;

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

// [...]
```

## Criando APK

### Gerando uma Chave de Upload

- Vamos precisar gerar uma chave privada utilizando o keytool. Vamos precisa executar o keytool a partir da pasta _android/app_ do nosso app.
Para gerar a chave, vamos executar o seguinte código:

``` 
keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- Vamos substituir conforme o projeto:

**my-upload-key:** nome da sua key;
**my-key-alias:** apelido da sua key;
**-validity 10000:** quantidade de dias da validade da key.

- Esse comando pedirá várias informações. Vamos preenche-las de acordo com o contexto de lançamento do aplicativo em questão.

- Feito isso, podemos notar que dentro de _android/app_ foi gerado um arquivo chamado _my-upload-key.keystore_.


### Configurando as Variáveis no Gradle

- Vamos editar o arquivo _~/.gradle/gradle.properties_ ou _android/gradle.properties_ e vamos adicionar as seguintes linhas, substituindo as informações pelas cadastradas no passo anterior: 

``` 
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

### Adicionando Configurações de Assinatura à Configuração do Gradle do seu APP

- Vamos editar o arquivo _android/app/build.gradle_ e adicionar a configuração de assinatura:

```
...
android {
  ...
  defaultConfig { ... }
  signingConfigs {
    release {
      if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
        storeFile file(MYAPP_UPLOAD_STORE_FILE)
        storePassword MYAPP_UPLOAD_STORE_PASSWORD
        keyAlias MYAPP_UPLOAD_KEY_ALIAS
        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
      }
    }
  }
  buildTypes {
    release {
      ...
      signingConfig signingConfigs.release
    }
  }
}
...
```

### Testando a versão de lançamento do aplicativo 

- Antes de enviar a versão de lançamento para a Play Store, é bom nos certificarmos de testá-la completamente. Primeiro vamos desistalar qualquer versão anterior do aplicativo que já instalamos. Agora, vamos instalar ele no dispositivo usando o seguinte comando na raiz do projeto:

```
npx react-native run-android --variant=release
```

- Nota-se que _--variant release_ só está disponível se já configuramos a assinatura conforme descrito acima.
Podemos encerrar qualquer instância do bundler em execução, pois todo nosso framework e código JavaScript estão agrupados nos recursos do APK.

### Gerando APK para instalarmos no nosso despositivo e enviarmos para outras pessoas

- Primeiramente, vamos entrar na pasta _android_ e vamos rodar o seguinte comando:

```
./gradlew assembleRelease
```

- Feito isso, ele vai gerar o nosso APK dentro de _android/app/build/outputs/apk/release_ o com o nome _app-release.apk_;

- Vamos acessar esse diretório no terminal;

- Em seguida, vamos inserir nosso dispositivo movel via USB e ativar o modo desenvolvedor nele e ativar a depuração USB;

- Depois de conectar ele como emulador com o adb, vamos instalar o app rodando o comando:

```
adb install app-release.apk
            [nome-apk-gerado]
```

- Agora, conseguimos usar a versão mais recente do nosso app no nosso dispositivo móvel.

- Podemos também mandar esse arquivo via wpp ou realizar o upload no drive e compartilhar o link.
