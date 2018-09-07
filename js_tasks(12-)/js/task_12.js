
// Создайте метод, который будет считать сколько денег получает работник в неделю.
// Метод должен принимать на входе два аргумента (зарплата в час, кол-во
// проработанных часов).
// Условия:
// 1) Каждый час после 40 считается за полтора.
// 2) Работник не может работать больше, чем 60 часов в неделю.
// 3) Работник не может получать меньше 8 долларов в час.


// Functions

function checkInputData(salary, hours) {
    if (isNaN(salary) || isNaN(hours)) {
        return false;
    } else {
        return true;
    }
}

function checkTaskData(salary, hours) {
    if(salary < 8 || hours > 60 || hours < 0) {
        return false;
    } else {
        return true;
    }
}

function checkBonus(salary, hours) {
    var bonusSalary = (salary/2) + salary;
    var bonusHours = hours - 40;
    return bonusSalary*bonusHours;
}

function checkSalary(salary, hours) {
    if (hours > 40) {
        return checkBonus(salary,hours) + (40*salary) + " more then 40 hours"; 
    } else {
        return hours*salary + " 40 hours or less";
    }
}

function salaryCalculator(salary, hours) {
    if (checkInputData(salary, hours) && checkTaskData(salary, hours)) {
        console.log(checkSalary(salary, hours));
    } else {
        console.log("Please enter the correct data");
    }
}

// -----------------------------


// Implementation of the program

salaryCalculator(8, 60);




