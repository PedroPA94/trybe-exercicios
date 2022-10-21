module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgeryId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    specialty: {
      allowNull: false,
      type: DataTypes.STRING
    },
    doctor: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Surgeries'
  });

  return Surgery;
};