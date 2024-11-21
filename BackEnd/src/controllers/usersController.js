const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;

    try {
        const saltRounds = 10;
        const senhaHast = await bcrypt.hash(senha, saltRounds);

        const newUser = await usersModel.create({
            firstname: nome,
            surname: sobrenome,
            email: email,
            password: senhaHast
        });

        return res.status(201).send({
            message: `🟢 Usuário ${newUser.firstname}, ID: ${newUser.id} criado com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao criar o usuário. Erro: ${error.message}`
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.findAll();
        return res.send(users);
    } catch (error) {
        return res.status(500).send({
            message: `❌ Erro ao listar os usuários! Erro: ${error.message}`
        });
    }
};

const updateUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, sobrenome, email, senha } = req.body;

    try {
        const user = await usersModel.findByPk(id);
        if (!user) {
            return res.status(404).send({
                message: `❌ Usuário ID: ${id} não encontrado.`
            });
        }

        await usersModel.update(
            {
                firstname: nome,
                surname: sobrenome,
                email: email,
                password: senha
            },
            { where: { id: id } }
        );
        return res.status(200).send({
            message: `🟢 Usuário ID: ${id} atualizado com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao atualizar o usuário. Erro: ${error.message}`
        });
    }
};

const deleteUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const user = await usersModel.findByPk(id);
        if (!user) {
            return res.status(404).send({
                message: `❌ Usuário ID: ${id} não encontrado.`
            });
        }

        await usersModel.destroy({ where: { id: id } });
        return res.status(200).send({
            message: `🟢 Usuário ID: ${id} deletado com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar o usuário. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewUser,
    getAllUsers,
    updateUserById,
    deleteUserById
};