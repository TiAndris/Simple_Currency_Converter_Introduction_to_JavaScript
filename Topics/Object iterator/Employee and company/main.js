function employeeAndCompany(employees) {
    for (let i in employees){
        console.log(`Employee ${employees[i].name} works for ${employees[i].company}`);
    }
}