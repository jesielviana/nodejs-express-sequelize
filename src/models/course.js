const course = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
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
  }, {
    tableName: 'courses'
  })

  Course.associate = (models) => {
    Course.hasMany(models.Student, {
      foreignKey: 'courseId',
      as: 'students'
    })
  }

  return Course
}

module.exports = course
