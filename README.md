# 💈 Navalha Barber

Sistema de agendamento online para barbearia, desenvolvido para permitir que os clientes escolham serviços, barbeiros, datas e horários de forma simples e intuitiva.

O projeto utiliza uma API REST desenvolvida em Node.js e Express para gerenciar os agendamentos, com persistência dos dados em um banco de dados MySQL hospedado na nuvem.

O objetivo do projeto é praticar o desenvolvimento web e a integração entre front-end, back-end e banco de dados.

## ✨ Funcionalidades

- **Escolha de serviços:** seleção do serviço desejado.
- **Escolha de barbeiro:** seleção do profissional.
- **Agendamento:** escolha de data e horário.
- **Resumo dinâmico:** exibição do serviço, tempo estimado, preço, barbeiro, data, horário e valor total.
- **Formulário de agendamento:** preenchimento de nome, WhatsApp, e-mail e observações.
- **Lista de agendamentos:** visualização dos agendamentos marcados e contador de agendamentos ativos.
- **Cancelamento:** exclusão de agendamentos da interface e do banco de dados.
- **Persistência de dados:** integração com uma API REST e banco de dados MySQL.

## 🛠️ Tecnologias utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript (DOM, eventos e Fetch API)
- Font Awesome
- Google Fonts

### Back-end

- Node.js
- Express
- MySQL2
- CORS
- dotenv

### Banco de dados e hospedagem

- MySQL — TiDB Cloud
- Render — hospedagem da API

## 📁 Estrutura do projeto

```text
barebaria-navalha/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── images/
│   ├── logo.png
│   └── favicon-barber.png
└── README.md
```

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior.
- Um banco de dados MySQL local ou hospedado na nuvem.
- Git, para clonar o repositório.

### 1. Clone o repositório

```bash
git clone https://github.com/dimitrirosso/barbearia-navalha.git
cd barebaria-navalha
```

### 2. Instale as dependências do back-end

```bash
cd backend
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend/` com as credenciais do seu banco de dados:

```env
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PORT=4000
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
PORT=3000
```

### 4. Crie a tabela no banco de dados

Execute o seguinte comando SQL no seu banco de dados:

```sql
CREATE TABLE agendamento (
    id_agendamento INT AUTO_INCREMENT PRIMARY KEY,
    nome_barbeiro VARCHAR(100) NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL,
    servico VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    dia DATE NOT NULL,
    horario TIME NOT NULL,
    observacoes VARCHAR(255)
);
```

### 5. Inicie o servidor

Na pasta `backend/`, execute:

```bash
node server.js
```

A API ficará disponível localmente em:

```text
http://localhost:3000
```

### 6. Execute o front-end

Abra o arquivo `frontend/index.html` no navegador.

Por padrão, o arquivo `script.js` utiliza a URL da API hospedada na Render. Para executar tudo localmente, altere a URL utilizada nas chamadas `fetch()` para `http://localhost:3000`.

## 🔌 Endpoints da API

| Método   | Rota           | Descrição                      |
| -------- | -------------- | ------------------------------ |
| `POST`   | `/adicionar`   | Cria um novo agendamento.      |
| `DELETE` | `/deletar/:id` | Exclui um agendamento pelo ID. |

## 🗺️ Melhorias futuras

- [ ] Criar uma rota `GET` para carregar os agendamentos salvos ao abrir a página.
- [ ] Validar os campos obrigatórios do formulário.
- [ ] Impedir conflitos de horários para o mesmo barbeiro.
- [ ] Melhorar a responsividade para dispositivos móveis.
- [ ] Implementar navegação funcional para as seções de serviços, barbeiros, depoimentos e localização.

## 👨‍💻 Autor

**Dimitri Rosso**

- GitHub: [@dimitrirosso](https://github.com/dimitrirosso)
- LinkedIn: [dimitrirosso](https://www.linkedin.com/in/dimitri-rosso-200701ia983934892jdnzk/)
