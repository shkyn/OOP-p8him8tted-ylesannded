class Course {
    constructor(name) {
        this.name = name;
        this.grades = []; // Each grade is an object { student: Student, grade: number }
    }

    addGrade(student, grade) {
        this.grades.push({ student, grade });
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
        return `${this.name} course.`;
    }
}

module.exports = Course;
