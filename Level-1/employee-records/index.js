var employees = []

function Employee(name, jobTitle, salary, status) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  this.currentStatus = function () {
    console.log(this.status)
  }
  this.printEmployeeForm = function () {
    console.log(name, jobTitle, salary, status)
  }
}

var george = new Employee("George", "1st President", 25000, "Full Time")
var teddy = new Employee("Teddy", "26th President", 50000, "Full Time")
var john = new Employee("JFK", "35th President", 100000, "Part Time")

// john.currentStatus()

// george.printEmployeeForm()
// teddy.printEmployeeForm()
// john.printEmployeeForm()

// employees.push()
// console.log(employees)