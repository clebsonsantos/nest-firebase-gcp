# NestJS + Firebase Cloud Functions

Este projeto demonstra como integrar o **NestJS** com **Firebase Cloud Functions**, incluindo o upload de arquivos para o Firebase Storage.

## 📹 Vídeo Tutorial

🔗 Assista o vídeo explicativo aqui: []

## 🚀 Tecnologias Utilizadas
- **NestJS** - Framework para Node.js
- **Firebase Cloud Functions** - Execução de funções serverless
- **Firebase Storage** - Armazenamento de arquivos na nuvem
- **Multer** - Middleware para upload de arquivos

## 📂 Estrutura do Projeto
```
📂 src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── 📂 config
│   ├── file-interceptor.ts
│   └── initializer.ts
├── main.ts
└── 📂 upload
    ├── upload.controller.ts
    └── upload.module.ts
```

## 📌 Configuração Inicial

### 1️⃣ Clone o Repositório
```sh
git clone https://github.com/clebsonsantos/nest-firebase-gcp.git
cd nest-firebase-upload
```

### 2️⃣ Instale as Dependências
```sh
pnpm install
```

### 3️⃣ Inicie o Servidor Localmente
```sh
pnpm run build && firebase emulators:start
```

## 📤 Testando o Upload de Arquivos
Para testar o upload, use **cURL** ou **Postman**:

```sh
curl -X POST http://127.0.0.1:5001/nest-firebase-gcp/us-central1/serverless/upload \
  -F "file=@/caminho/do/arquivo.jpg"
```

## 🚀 Deploy no Firebase
Para implantar as funções no Firebase, execute:
```sh
firebase deploy --only functions
```

## 📜 Licença
Este projeto está sob a licença MIT.

