# API Clean Architecture para Teste Voltz

Esta é uma API Clean Architecture desenvolvida para atender aos requisitos de um teste da Voltz. Ela foi projetada com a intenção de não depender de um framework específico, mas, atualmente, está configurada para ser executada com o Nest Js. Além disso, a API é independente de ORM (Object-Relational Mapping) e banco de dados, mas foi configurada para utilizar o Prisma ORM e o PostgreSQL.

## Executando o Projeto

Para rodar o projeto, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:
2. Navegue até o diretório do projeto:
2. Execute o seguinte comando para iniciar o projeto com o Docker:

npm run docker
ou
yarn docker

Para desenvolvimento, clone o repositório e execute o seguinte comando para instalar as dependências e iniciar o servidor:

npm install
ou
yarn install

O programa irá executar automaticamente os demais comandos no postinstall.


A próxima parte será a configuração do ambiente `.env`:

```markdown
## Configuração do Ambiente (.env)

Antes de executar a API, é importante configurar as variáveis de ambiente necessárias. Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

```env
NODE_ENV=production
PORT=3000

POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_LOCAL=localhost
POSTGRES_PORT=5432

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_LOCAL}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public
```

## Documentação

A documentação da API está disponível acessando o seguinte endereço local:

[http://localhost:3000](http://localhost:3000)

Você pode utilizar essa documentação para entender os endpoints disponíveis e como interagir com a API.

