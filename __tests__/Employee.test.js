const Employee = require('../lib/Employee.js')


test('creates an employee object', () => {
    const employee = new Employee('bryan', 'jm707d', 'jm707d@gmail.com');

    expect(employee.name).toBe('bryan');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee')

});

