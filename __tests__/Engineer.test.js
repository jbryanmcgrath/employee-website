const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('bryan', 'jm707d', 'jm707d@gmail.com', 'jbryanmcgrath')

    expect(engineer.name).toBe('bryan');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer')
})