module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    message: DataTypes.STRING,
    upvoting: DataTypes.INTEGER,
    downvoting: DataTypes.INTEGER,
    accountId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Comments'
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account,
      { foreignKey: 'accountId', as: 'account' }
    );
  };

  return Comment;
};
