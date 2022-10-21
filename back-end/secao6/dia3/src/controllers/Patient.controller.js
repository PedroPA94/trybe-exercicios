const PatientService = require('../services/Patient.service');

const getPatientsAndPlans = async (_req, res) => {
  const results = await PatientService.getPatientsAndPlans();
  return res.status(200).json(results);
};

const getPatientsAndSurgeries = async (req, res) => {
  const { hideDoctors } = req.query;
  const results = await PatientService.getPatientsAndSurgeries(hideDoctors);
  return res.status(200).json(results);
};

const getPatientsByPlanId = async (req, res) => {
  const { id: planId } = req.params; 
  const patients = await PatientService.getPatientsByPlanId(planId);
  if (!patients) {
    return res
      .status(404)
      .json({ message: 'Plano não encontrado ou sem pacientes cadastrados' }); 
}
  res.status(200).json(patients);
};

const createPatient = async (req, res) => {
  const { fullname, planId } = req.body;
  const newPatient = await PatientService.createPatient({ fullname, planId });
  return res.status(201).json(newPatient);
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  getPatientsByPlanId,
  createPatient,
};