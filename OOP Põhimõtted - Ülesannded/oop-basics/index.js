const Person = require('./classes/Person');
const Student = require('./classes/Student');
const Course = require('./classes/Course');
const School = require('./classes/School');

const school = new School("Awesome School");
const student1 = new Student("John Smith");
student1.setDateOfBirth(1995);
const student2 = new Student("Mary Lee");
student2.setDateOfBirth(2000);

school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student1); // Test for duplicate

console.log(school.getStudents().length);  // Output: 2

const course1 = new Course("Math");
const course2 = new Course("Physics");

school.addCourse(course1);
school.addCourse(course2);
school.addCourse(course1); // Test for duplicate

console.log(school.getCourses().length); // Output: 2

school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);
school.addStudentGrade(student2, course1, 5);

console.log(student1);
console.log(student2);

const student3 = new Student("Cocoo Turner");
student3.setDateOfBirth(2000);

school.addStudentGrade(student3, course1, 5); // Should not add, as student3 is not enrolled

console.log(student3.getGrades().length); // Output: 0

school.addStudent(student3);
school.addStudentGrade(student3, course1, 3);
school.addStudentGrade(student3, course2, 5);

console.log(student3.getGrades().length); // Output: 2
console.log(student3.getGrades());
console.log(course1.getGrades());

console.log("Students ordered by average grade:");
console.log("Student - avg grade");
console.log("-".repeat(30));
school.getStudentsOrderedByAverageGrade().forEach((student) => {
    console.log(student.getName(), student.getAverageGrade());
});

console.log("\nCourse average grades");
school.getCourses().forEach((course) => {
    console.log(course.name, course.getAverageGrade());
});
