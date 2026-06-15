# API de Upload e Gerenciamento de Fotos

Uma API REST simples para cadastro de usuários, autenticação e upload/gerenciamento de fotos, desenvolvida com Node.js e Express.

## Tecnologias

- Node.js
- Express
- Middleware para upload de arquivos
- Validações e autenticação com JWT

## Estrutura do projeto

- controllers/ — lógicas de rota
- models/ — modelos de dados
- routes/ — definições de endpoints
- middlewares/ — validações e proteção de rotas
- uploads/photos/ — imagens enviadas
- uploads/users/ — avatares/arquivos relacionados a usuários

## Pré-requisitos

- Node.js 16+ instalado
- Banco de dados (conforme configuração em config/db.js)

## Instalação

1. Instale dependências:

```bash
npm install
```

2. Crie um arquivo .env na raiz com as variáveis necessárias (exemplo abaixo):

```
PORT=3000
DATABASE_URL=<sua_string_de_conexão>
JWT_SECRET=<segredo_jwt>
```

## Execução

- Em desenvolvimento:

```bash
npm run dev
```

- Em produção:

```bash
npm start
```

## Endpoints principais

- Autenticação
  - POST /users/register — cadastro
  - POST /users/login — login

- Usuários
  - GET /users — listar usuários (conforme permissões)

- Fotos
  - GET /photos — listar fotos
  - GET /photos/:id — obter foto por id
  - POST /photos — criar foto (upload protegido por autenticação)
  - DELETE /photos/:id — remover foto (protegido)

Observação: rotas e nomes podem variar conforme implementação em routes/.

## Uploads

Arquivos enviados são armazenados em uploads/photos/ e uploads/users/. Garanta que estas pastas existam e sejam graváveis pelo processo Node.

## Validações e middlewares

Middleware de validação e autenticação estão em middlewares/ (por exemplo: authGuard.js, imageUpload.js, photoValidation.js).

## Contribuição

1. Fork do repositório
2. Crie uma branch com sua feature: git checkout -b feat/nova-feature
3. Abra um pull request descrevendo suas mudanças

## Licença

Licença aberta — ajuste conforme desejado.

---
