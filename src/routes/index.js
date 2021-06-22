import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: 'Bienvenue sur l\'api du système de gestion des utilisateurs et des annonces' }));

export default indexRouter;
