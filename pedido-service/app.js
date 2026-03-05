const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database.js');
const pedidoRoutes = require('./routes/pedido.routes.js');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/pedidos', pedidoRoutes);

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Pedido DB sincronizado!');

        app.listen(process.env.PORT, () => {
            console.log(`Pedido Service rodando na porta ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('Erro ao iniciar o Pedido Service:', err);
    }
})();