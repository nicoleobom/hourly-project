module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
        name : DataTypes.STRING,
        budget : DataTypes.INTEGER,
        description : DataTypes.STRING,
        status : boolean
    })

    return Project;
}