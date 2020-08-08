<h1 align="center">
   <img alt="Screen Shot 1" src=".github/covid-xap.png" width="100%">
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## :rocket: Tecnologias

-  [Gatsby](https://www.gatsbyjs.org/)
-  [React](https://pt-br.reactjs.org/)
-  [Chart.js](https://www.chartjs.org/docs/latest/)
-  [LeafletJS](https://leafletjs.com/)
-  [Google Sheets API](https://developers.google.com/sheets/api)
-  [Styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [YARN](https://yarnpkg.com/)

## 💻 Projeto

Painel contendo as informações epidemiológicas dos municípios brasileiros. A fonte oficial dos dados são os boletins epidemiológicos de cada Vigilância Epidemiológica.

A construção deste projeto é meramente informativo e como forma de estudo, e não devem ser utilizados para nenhuma orientação médica ou comércio.

## :wrench: Configurando Ambiente e Ferramentas

O tutorial a seguir é voltado para as distribuições Linux: `Ubuntu e Debian`. Clique [aqui](https://www.gatsbyjs.org/tutorial/part-zero/) para configurar em outros sistemas operacionais.


```bash
# CURL: Usado em scripts para transferir dados
$ sudo apt-get install curl

# Instalação do nvm via Curl. NVM: Gerenciador de versões NodeJS.
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

# Instalando a última versão estável do NodeJS via nvm.
$ nvm install 12.16 && nvm use 12.16

# Confirmando a instalação
$ npm --version && node --version

# Instalando globalmente a CLI do Gatsby
$ npm install -g gatsby-cli
```

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório:

```bash
$ git clone https://github.com/LeeonardoVargas/painel-covid-chapeco.git && cd painel-covid-chapeco
```
Instale os pacotes e execute o projeto:

```bash
# Instalando os pacotes do package.json
$ yarn install

# Executanto projeto
$ gatsby develop
```
Agora basta acessar a url **http://localhost:8000**

## :muscle: Contribuir

Como seres humanos todos nós somos tolerantes a falhas, então se você notar algum erro ou tenha alguma sugestão sobre o projeto, eu ficarei feliz com a sua contribuição, então faça o `fork` e clone o projeto a partir do seu usuário.

```bash
$ git clone https://github.com/SEU-NOME-DE-USUARIO/painel-covid-chapeco.git
```
Gere uma nova ramificação do projeto, no exemplo a seguir vou chamar o branch de `minha-alteracao`, mas você pode dar o nome que quiser.

```bash
# Criando um branch
$ git branch minha-alteracao
# Acessando o novo branch
$ git checkout minha-alteracao
```

Faça as alterações necessárias e o push para a branch.

```bash
# Adicionando os arquivos alterados
$ git add .
# Mensagem do commit
$ git commit -m "Corrigindo...."
# Enviando alterações para o brach
$ git push --set-upstream origin minha-alteracao
```
Por último, você deve navegar até o seu repositório onde fez o fork e pressionar o botão *New pull request* no lado esquerdo da página.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
