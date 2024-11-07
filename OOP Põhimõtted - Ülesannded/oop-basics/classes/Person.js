class Person {
    constructor(name) {
        this.name = name;
        this.dateOfBirth = null;
    }

    setDateOfBirth(year) {
        this.dateOfBirth = year;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    age() {
        const currentYear = new Date().getFullYear();
        return this.dateOfBirth ? currentYear - this.dateOfBirth : null;
    }

    getName() {
        return this.name;
    }

    description() {
        return `${this.name} is a person.`;
    }
}

module.exports = Person;
