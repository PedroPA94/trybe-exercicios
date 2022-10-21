module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
      patientId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      planId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Patients'
    });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      as: 'plan',
      foreignKey: 'planId'
    })
  }

  return Patient;
};