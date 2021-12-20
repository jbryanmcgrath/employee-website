const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('creates an employee object', () => {
    const intern = new Intern('bryan', 'jm707d', 'jm707d@gmail.com', 'Vanderbilt')

    expect(intern.name).toBe('bryan');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe('Vanderbilt');
    expect(intern.getRole()).toBe('Intern')
})