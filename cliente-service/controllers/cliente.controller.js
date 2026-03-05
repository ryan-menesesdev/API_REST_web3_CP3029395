const Cliente = require('../models/Cliente');

module.exports.clienteController = {
    createCliente: async (req, res) => {
        try {
            const cliente = await Cliente.create(req.body);
            res.status(201).json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getClientes: async (req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getClienteById: async (req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);

            if (!cliente) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            res.json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    updateCliente: async (req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);

            if (!cliente) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            await cliente.update(req.body);
            res.json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    deleteCliente: async (req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);

            if (!cliente) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            await cliente.destroy();

            res.json({ message: 'Cliente deletado com sucesso' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }   
    }
}
