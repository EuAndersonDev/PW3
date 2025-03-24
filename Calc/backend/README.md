# Calculadora Backend

Este projeto é uma API de backend para uma calculadora simples que utiliza AJAX para realizar operações matemáticas. A aplicação é construída com Node.js e Express.

## Estrutura do Projeto

```
calculadora-backend
├── src
│   ├── app.js
│   ├── controllers
│   │   └── calculatorController.js
│   ├── routes
│   │   └── calculatorRoutes.js
│   └── services
│       └── calculatorService.js
├── package.json
├── .env
└── README.md
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd calculadora-backend
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

1. Configure as variáveis de ambiente no arquivo `.env`. Por exemplo:
   ```
   PORT=3000
   ```
2. Inicie o servidor:
   ```
   npm start
   ```
3. Acesse a API em `http://localhost:3000`.

## Endpoints

- `POST /add`: Realiza a adição de dois números.
- `POST /subtract`: Realiza a subtração de dois números.
- `POST /multiply`: Realiza a multiplicação de dois números.
- `POST /divide`: Realiza a divisão de dois números.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.