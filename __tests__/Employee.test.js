const Employee = require('../lib/Employee.js')


test('creates an employee object', () => {
    const employee = new Employee('bryan');

    expect(employee.name).toBe('bryan');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

});

