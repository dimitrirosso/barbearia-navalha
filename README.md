💈 Navalha Barber

Site de agendamento online para barbearia, com escolha de serviço, barbeiro, data e horário, resumo do pedido e lista de agendamentos marcados. Os agendamentos são salvos em um banco de dados MySQL por meio de uma API própria em Node.js.

Projeto desenvolvido para praticar HTML, CSS, JavaScript e integração front-end + back-end.

✨ Funcionalidades
Escolha do serviço
Escolha do barbeiro
Seleção de data e horário
Resumo dinâmico do agendamento (serviço, tempo estimado, preço, barbeiro, data e hora e total)
Formulário com nome, WhatsApp, e-mail e observações
Lista de agendamentos marcados com contador de ativos
Cancelamento de agendamento (remove da tela e do banco)
Persistência dos dados com API REST + MySQL
🛠️ Tecnologias

Front-end

HTML5
CSS3 (Flexbox e Grid)
JavaScript (DOM, eventos, fetch)
Font Awesome (ícones)
Google Fonts (Hanken Grotesk e Newsreader)

Back-end

Node.js
Express
MySQL2
CORS
dotenv

Banco de dados e deploy

MySQL na nuvem (TiDB)
API hospedada na Render
📁 Estrutura do projeto
barebaria-navalha/
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── backend/
│ ├── server.js
│ ├── package.json
│ └── .env  
├── images/
│ ├── logo.png
│ └── favicom-barber.png
└── README.md

🚀 Como executar
Pré-requisitos
Node.js 18 ou superior
Um banco MySQL (local ou na nuvem)

1. Clonar o repositório
   bash
   git clone https://github.com/seu-usuario/navalha-barber.git
   cd navalha-barber
2. Configurar o back-end
   bash
   cd backend
   npm install

Crie um arquivo .env dentro da pasta backend com as suas credenciais:

env
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PORT=4000
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
PORT=3000

Inicie o servidor:

bash
node server.js

A API ficará disponível em http://localhost:3000.

3. Criar a tabela no banco
   sql
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
4. Rodar o front-end

Abra o index.html no navegador

Por padrão, o script.js chama a API publicada na Render. Para testar com o servidor local, troque a URL nas chamadas fetch por http://localhost:3000.

🔌 Endpoints da API
Método Rota Descrição
POST /adicionar Cria um novo agendamento
DELETE /deletar/:id Remove um agendamento pelo id

🗺️ Próximos passos
Rota GET para carregar os agendamentos já salvos ao abrir a página
Validação dos campos obrigatórios (nome, WhatsApp, e-mail)
Bloquear horários já ocupados para o mesmo barbeiro
Versão responsiva para celular
Menu de navegação funcional (Serviços, Barbeiros, Depoimentos, Localização)

👤 Autor

Feito por Dimitri Rosso

GitHub: @dimitrirosso
LinkedIn: Dimitri Rosso
