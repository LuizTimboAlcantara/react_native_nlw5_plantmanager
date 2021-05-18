 <h1 align="Left">  
  <img src="./assets/favicon.png">
  <Strong>PlantManager</Strong>
 </h1>

<h1 align="center">
  <img src="./assets/aplicacao.gif" />
<h1>

# Índice

- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)

---

# 🌱 Sobre

Projeto para gerenciar o tempo para aguar pantinhas. Projeto feito na semana NLW 5 da Rocketseat.

---

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- React Native;
- Expo;
- Date-fns;
- Json-server;

---

## 📁 Como baixar o projeto

```bash
# Clonar o repositório
  $ git clone https://github.com/LuizTimboAlcantara/react_native_nlw5_plantmanager.git

# Entrar na pasta do projeto
  $ cd react_native_nlw5_plantmanager

# Instalar as dependências do projeto
  $ npm install ou yarn install

# Instalar globalmente o json-server
  $ npm install -g json-server ou yarn add -g json-server

# Alterar baseUrl (./src/services/api.ts)
  $  baseURL: "http://seuIp:3333",
        Exemplo:
          baseURL: "http://192.168.15.10:3333",

#Rodar o json-server
  $ json-server ./src/services/server.json --host seuIp --port 3333 --delay 700
        Exemplo:
          json-server ./src/services/server.json --host 192.168.15.8 --port 3333 --delay 700

# Rodar a aplicação
  $ Emulador aberto: expo start

```
