const Employee = require('../lib/Employee.js')


test('creates an employee object', () => {
    const employee = new Employee('bryan');

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));

});

