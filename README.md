# profile-master-generator

> Aplicação que cria uma moldura da GDG Juiz de Fora para imagens de profiles.

> Este é um projeto desenvolvido para um processo de seleção da App Masters.

ProfileMaster: https://profile-master-generator.vercel.app/

GDG Juiz de Fora: https://gdgjf.github.io/

App Masters: https://appmasters.io/

## Install

```bash
npm install --save profile-master-generator

yarn add profile-master-generator
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'profile-master-generator'
import 'profile-master-generator/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Customization

Este projeto está disponível para ser customizado por qualquer usuário.

O client id do github pode ser alterado em firebase.initializeApp(), dentro de ./src/pages/ProfileMaster/index.jsx.

Sua legenda pode ser customizada tambem neste arquivo e a logo pode ser alterada em ./src/assets/logo.png, apenas substituindo por um arquivo de mesmo nome e extensão.

## License

MIT © [GabrielHenrichs](https://github.com/GabrielHenrichs)
