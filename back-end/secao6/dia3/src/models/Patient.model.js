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
        references: {
          model: 'Plans',
          key: 'planId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    {
      timestamps: false,
      underscore: true,
      tableName: 'Patients'
    });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan, {
      as: 'plan',
      foreignKey: 'planId'
    })
  }

  return Patient;
};