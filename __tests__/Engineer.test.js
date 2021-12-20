const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('creates engineer object extending from Employee Class', () => {
    const engineer = new Engineer('bryan')

    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.employeeTitle).toBe('Engineer')
})  