const express = require('express');
const PatientController = require('./controllers/Patient.controller');
const SurgeryController = require('./controllers/Surgery.controller');
require('express-async-errors');

const app = express();
app.use(express.json());

app.post('/patients', PatientController.createPatient);
app.get('/patients/plans', PatientController.getPatientsAndPlans);
app.get('/patients/plans/:id', PatientController.getPatientsByPlanId);
app.get('/patients/surgeries', PatientController.getPatientsAndSurgeries);

app.get('/surgeries/:doctor', SurgeryController.getSurgeriesByDoctor);

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;