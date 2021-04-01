const student = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    tableName: 'students'
  }
  )

  Student.associate = (models) => {
    Student.belongsTo(models.Course, {
      foreignKey: 'courseId',
      as: 'course'
    })
  }

  return Student
}

module.exports = student
