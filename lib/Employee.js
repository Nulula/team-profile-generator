// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name,Id,email) {
        const name = name;
        const Id = Id;
        const email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.Id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
};

const e = new Employee();
console.log(e);