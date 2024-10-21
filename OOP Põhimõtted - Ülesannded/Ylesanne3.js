class student {
    constructor(nimi, id) {
        this.#nimi = nimi;
        this.#id = id;
        this.#status = "Active";
    }

    #nimi;
    #id;
    #status;

    getId() {
        return this.#id
    }
    
    setName(nimi) {
        this.#nimi = nimi;
    }

    getName() {
        return this.#nimi
    }

    setStatus(status) {
        const allowedStatuses = ["Active", "Expelled", "Finished", "Inactive"];
        if (allowedStatuses.includes(status)) {
            this.#status = status;
        }
    }

    getStatus() {
        return this.#status
    }
}

const student1 = new Student("Johnny Bravo", 23313);
console.log(student1.getId());
console.log(student1.getName());
console.log(student1.getStatus());

student1.setName("Istoprocent")
console.log(student1.getName());

student1.setStatus("Finished")
console.log(student1.getStatus())

student1.setStatus("Unknown")
console.log(student1.getStatus())
