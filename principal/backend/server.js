import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  ssl: {
    rejectUnauthorized: true,
  },
});

app.post("/adicionar", async (req, res) => {
  const {
    nomeBarbeiro,
    cliente,
    servico,
    preco,
    data_corte,
    horario_corte,
    observacoes,
  } = req.body;

  try {
    const [resultado] = await db.query(
      "INSERT INTO agendamento (nome_barbeiro, nome_cliente, servico, preco, dia, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        nomeBarbeiro,
        cliente,
        servico,
        preco,
        data_corte,
        horario_corte,
        observacoes,
      ],
    );

    res.status(201).json({ Mensagem: "cadastrado", id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ mensagem: error });
  }
});

app.delete("/deletar/:id", (req, res) => {
  const id = Number(req.params.id);
  try {
    const [resultado] = db.query(
      "DELETE FROM agendamento WHERE id_agendamento = ?",
      [id],
    );
  } catch (error) {
    res.status(200).json({ Mensagem: "Erro ao deletar" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Rodando...."));
