module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    coverage: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Plans'
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      as: 'patients',
      foreignKey: 'patientId'
    })
  }

  return Plan;
};