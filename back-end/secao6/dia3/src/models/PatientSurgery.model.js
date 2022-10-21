module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'Patient_surgeries'
    }
  );

  PatientSurgery.associate = (models) => {
    Patient.hasMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId'
    });

    Surgery.hasMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId'
    });
  };
};