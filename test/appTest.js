const chai = require("chai");
const assert = require("chai").assert,
      expect = require("chai").expect;
chai.use(require("chai-arrays"));
chai.use(require("chai-things"));
const studentController = require("../controllers/studentController");
const studyClassController = require("../controllers/studyClassController");


describe("Students tests", () => {
    it("Gets all of the students registered", async () => {
        
            let students = await studentController.getAllStudents();
            assert.typeOf(students, "array");
            expect(students).to.all.have.property("id");            
            expect(students).to.all.have.property("name");
            expect(students).to.all.have.property("age");
            expect(students).to.all.have.property("createdAt");
            expect(students).to.all.have.property("updatedAt");        
    });

    it("Gets the student attendance status on a specific class", async () => {        
        const studentId = 1;
        const classId = 2;
        let student = await studentController.getStudentAttendanceStatus(studentId, classId);
        assert.typeOf(student, "object");
        assert.property(student, "isPresent");
        assert.property(student, "createdAt");
        assert.property(student, "updatedAt");
        assert.property(student, "StudentId");
        assert.property(student, "StudyClassId");       
    });
});


describe("Class tests", () => {
    it("Gets all of the registered classes", async () => {        
        let classes = await studyClassController.getAllClasses();
        assert.typeOf(classes, "array");
        expect(classes).to.all.have.property("id");
        expect(classes).to.all.have.property("discipline");
        expect(classes).to.all.have.property("date");
        expect(classes).to.all.have.property("createdAt");
        expect(classes).to.all.have.property("updatedAt");
    })
})