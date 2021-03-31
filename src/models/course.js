const course = (sequelize, DataTypes) => {
  const Course = sequelize.define('course', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    ch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })

  Course.associate = (models) => {
    Course.hasMany(models.student, {
      foreignKey: 'courseId',
      as: 'students'
    })
  }

  return Course
}

module.exports = course
