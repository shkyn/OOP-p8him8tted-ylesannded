const Person = require('./Person');

class Student extends Person {
    constructor(name) {
        super(name);
        this.id = null;
        this.grades = []; // Each grade is an object { course: Course, grade: number }
    }

    setId(id) {
        if (this.id === null) { // Only set if id is not already assigned
            this.id = id;
        }
    }

    getId() {
        return this.id;
    }

    addGrade(course, grade) {
        this.grades.push({ course, grade });
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;
        const total = this.grades.reduce((sum, record) => sum + record.grade, 0);
        return total / this.grades.length;
    }

    description() {
        return `${this.name} is a student.`;
    }
}

module.exports = Student;
