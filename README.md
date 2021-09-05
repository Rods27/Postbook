
# <img align="left" src="public/favicon.ico" width="40" /> Postbook 

Uma aplicação que mostra posts, podendo favoritá-los e desfavoritá-los quando necessário, também podendo acessar os detalhes de cada post, possui um infiniteScrolling caso queira ver todos os posts.

## Indice
* [Deploy](#deploy)
* [Tecnologias](#tecnologias)
* [Instalação](#instalação)
* [Inicializando](#Inicializando)
* [Funcionalidades](#funcionalidades)
  * [Tela Principal](#tela-principal-posts)
  * [Tela de Detalhes](#tela-de-favoritos--id)
  * [Tela de Favoritos](#tela-de-favoritos--postsfavorites)

## Screenshots

<img align="left" src="public/img/1.jpg" width="400" />

<img align="center" src="public/img/2.jpg" width="400" />

<img align="left" src="public/img/3.jpg" width="400" />

<img align="center" src="public/img/4.jpg" width="400" />

## Deploy
<a href=https://rods27.github.io/Postbook/ target="blank">Link para o teste da aplicação</a>
Ou cole https://rods27.github.io/Postbook/ no navegador.

## Tecnologias
<ul>
  <li>Javascript</li>
  <li><a href="https://reactjs.org">React</a></li>
  <li>Redux</li>
  <li><a href="https://styled-components.com/">Styled Components</a></li>
</ul>

## Instalação
Assim que tiver clonado o repositório, usando o terminal do [vscode](https://code.visualstudio.com/) ou o terminal do seu sistema operacional.
- Installe as dependencias usando :
```
npm install
```
Faça o comando tanto na pasta raiz.

## Inicializando
Para a aplicação funcionar, basta digitar em seu terminal ```npm start``` da pasta raiz.


## Funcionalidades
[Voltar ao Indice](#indice)
#### Tela Principal ```/posts``` 
  <ul>
    <li>O usuário pode ler os posts e favoritá-los clicando no botão em formato de estrela, e desfavoritar.</li>
    <li>Caso o usuário clique no post, será direcionado a tela de detalhe de posts.</li>
    <li>Caso o usuario atinja o final da pagina pelo scroll, será carregado mais posts.</li>
    Header:
    <ul>
      Botão de Casa:
      <li>Será redirecionado a Tela Principal.</li>
      Botão de Estrela:
      <li>Será redirecionado aos favoritos.</li>
    </ul>
  </ul><br>

 #### Tela de Favoritos  ```/posts/id```
  <ul>
    <li>Nesta parte da tela, será mostrado o detalhe do post, incluindo os comentários.</li>
    <li>O usuário pode favoritar e desfavoritar o post.</li>
  </ul><br>
  
 #### Tela de Favoritos  ```/posts/favorites```
  <ul>
    <li>Nesta parte da tela, serão mostrados os posts favoritos do usuário.</li>
    <li>O usuário pode acessar o detalhe do post caso clique-o.</li>
    <li>O usuário pode desfavoritar o post.</li>
  </ul><br>
  
 [Voltar ao Indice](#indice)
## Feedback 

Ficarei bem agradecido caso queira me dar um feedback costrutivo, caso queira meus contatos estarão abaixo!

Email: rods.leite27@gmail.com e <a href="https://linkedin.com/in/rodrigoleite27">Linkedin</a>.
