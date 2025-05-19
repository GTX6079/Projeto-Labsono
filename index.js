const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'labsono'
});

app.get('/especialistas', (req, res) => {
  db.query('SELECT * FROM especialistas', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) res.json({ sucesso: true, usuario: result[0] });
    else res.status(401).json({ sucesso: false, mensagem: 'Credenciais inválidas' });
  });
});

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ sucesso: true });
  });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
