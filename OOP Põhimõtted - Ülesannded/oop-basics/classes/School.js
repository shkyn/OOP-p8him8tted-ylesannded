const Student = require('./Student');
const Course = require('./Course');

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
        this.studentIdCounter = 1;
    }

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    addStudent(student) {
        if (!this.students.includes(student) && student.age() >= 5) { // Basic age check
            student.setId(this.studentIdCounter++);
            this.students.push(student);
        }
    }

    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
        }
    }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
        return [...this.students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = School;
