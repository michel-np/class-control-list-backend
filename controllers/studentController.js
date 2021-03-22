const sequelize = require("../models");
const models = sequelize().models;


const getAllStudents = async () => {
    try {
        let students = [];
        students = await models.Student.findAll();
        return students;        
    } catch (error) {
        return error
    }

}

const getStudentAttendanceStatus = async (studentId, classId) => {
    try {
        let student = await models.StudentClass.findOne({
            where: {
                StudyClassId: classId,
                StudentId: studentId
            }
        })
        return student
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllStudents,
    getStudentAttendanceStatus
};