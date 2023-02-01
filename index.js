// Write your solution in this file!

const employee = {
    name: "",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let employeeClone = {...employee};
    employeeClone[key] = value;
    return employeeClone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}