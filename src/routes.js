const express = require('express');

const ongController = require('./controllers/ong.ctrl');
const incidentController = require('./controllers/incident.ctrl');
const sessionController = require('./controllers/session.ctrl');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.list);
routes.get('/ongs/incidents', ongController.listIncidents);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;