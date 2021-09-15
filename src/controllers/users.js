import { v4 } from 'uuid';
import Model from '../models/model';

const usersModel = new Model('users');
export const usersPage = async (req, res) => {
    try {
        const data = await usersModel.select('id');
        res.status(200).json({ users: data.rows });
    } catch (err) {
        res.status(200).json({ users: err.stack });
    }
};
export const addUser = async (req, res) => {
    const { id = v4() } = req.body;
    const columns = 'id';
    const values = `'${id}'`;
    try {
        const data = await usersModel.insertWithReturn(columns, values);
        res.status(200).json({ users: data.rows });
    } catch (err) {
        res.status(200).json({ users: err.stack });
    }
};
