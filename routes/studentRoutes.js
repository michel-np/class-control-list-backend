const router = require("express").Router();
const studentController = require("../controllers/studentController");



router.get("/", async (req, res, next) => {
    try {
        const students = await studentController.getAllStudents();
        res.status(200).send(students);
    } catch (error) {
        next(error);
    }
})

router.get("/get-student-attendance-status", async (req, res, next) => {
    try {
        let student = await studentController.getStudentAttendanceStatus(req.query.studentId, req.query.classId)
        res.status(200).send(student);        
    } catch (error) {
        next(error);
    }
})




module.exports = router;