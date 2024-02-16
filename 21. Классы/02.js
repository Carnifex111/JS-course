class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  increaseSalary(amount) {
    this.salary += amount;
    console.log(`Новая зарплата ${this.name} ${this.salary}`);
  }

  decreaseSalary(amount) {
    this.salary -= amount;
    console.log(`Новая зарплата ${this.name} ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  changeDepartment(newDepartment) {
    this.department = newDepartment;
    console.log(
      `Менеджер ${this.name} || теперь управляет отделом ${this.department}`
    );
  }
}

class Developer extends Employee {
  constructor(name, salary, specialty) {
    super(name, salary);
    this.specialty = specialty;
  }

  changeSpec(newSpec) {
    this.specialty = newSpec;
    console.log(`Новая специальность ${this.specialty}`);
  }
}
