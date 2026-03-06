const Pedido = require('../models/Pedido');

const validarCliente = async (clienteId) => {
    const url = `${process.env.CLIENTE_SERVICE_URL}/${clienteId}`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Cliente não encontrado');
    }

    return res.json();
};


module.exports.pedidoController = {
    createPedido: async (req, res) => {
        try {
            await validarCliente(req.body.clienteId);
            const pedido = await Pedido.create(req.body);
            res.status(201).json(pedido);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
        
    },
    getPedidos: async (req, res) => {
        try {
            const pedidos = await Pedido.findAll();
            res.json(pedidos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getPedidoById: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            res.json(pedido);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    updatePedido: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            if (req.body.clienteId && req.body.clienteId !== pedido.clienteId) {
                await validarCliente(req.body.clienteId);
            }

            await pedido.update(req.body);

            res.json(pedido);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    deletePedido: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            await pedido.destroy();

            res.json({ message: 'Pedido deletado com sucesso' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }   
    }
}