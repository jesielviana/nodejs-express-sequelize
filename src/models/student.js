const student = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
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
  })

  Student.associate = (models) => {
    Student.belongsTo(models.course, {
      foreignKey: 'courseId',
      as: 'course'
    })
  }

  return Student
}

module.exports = student
