const Employee = require('../lib/Employee')


test('creates an employee object', () => {
    const employee = new Employee('Jim');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));

});

