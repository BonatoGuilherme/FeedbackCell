# FeedBackCell

FeedBackCell é um projeto para criação de catálogos, inicialmente focado em celulares, mas adaptável para qualquer tipo de item. Usuários podem dar like, deslike, comentar nos itens do catálogo, e todas as interações ficam salvas em um banco de dados.

## Funcionalidades

- Visualização de catálogo de celulares (ou outros itens)
- Like e deslike em qualquer item
- Comentários em itens catalogados
- Registro de todas as interações em banco de dados (MySQL)
- Possibilidade de adaptação para outros tipos de catálogo
- 
## Estrutura do Projeto

Este projeto foi desenvolvido utilizando **Node.js** e segue a arquitetura **MVC (Model-View-Controller)**.

- **Model:** Responsável pela estrutura e manipulação dos dados.
- **View:** Responsável pela apresentação das informações (em projetos Node.js para API, normalmente são respostas JSON).
- **Controller:** Responsável pela lógica de controle, recebendo requisições, processando dados (usando o Model) e retornando respostas (usando a View).

## Pré-requisitos

- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- Instalar dependências do Node (npm install)
- Banco de dados [MySQL](https://www.mysql.com/)

## Como executar

1. Clone este repositório
2. Instale as dependências com:
    ```bash
    npm install
    ```
3. Configure o banco de dados MySQL conforme necessário no projeto.
4. Inicie o projeto com:
    ```bash
    npm run dev
    ```
> **Observação:** O projeto ainda não está completo.

## Exemplos de uso

- Criar catálogos de celulares, livros, carros ou qualquer outro item.
- Permitir que usuários interajam (like, deslike, comentários) com cada item.

## Autor

- Guilherme Bonato

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
