const { Patient, Plan, Surgery } = require('../models');

const getPatientsAndPlans = async () => {
  const patientsAndPlans = await Patient.findAll({
    include: { model: Plan, as: 'plan' },
  });
  return patientsAndPlans;
};

const getPatientsAndSurgeries = async (hideDoctors) => {
    const patientsAndSurgeries = await Patient.findAll({
      include: { 
        model: Surgery,
        as: 'surgeries', 
        through: { attributes: [] },
        attributes: { exclude: [hideDoctors ? 'doctor' : ''] },
      },
    });
  return patientsAndSurgeries;
};

const getPatientsByPlanId = async (planId) => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plan', where: { planId }, attributes: [] },
  });
  return patients;
};

const createPatient = async ({ fullname, planId }) => {
  const newPatient = await Patient.create({ fullname, planId });
  return newPatient;
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  getPatientsByPlanId,
  createPatient,
};