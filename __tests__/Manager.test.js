const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager
        ('bryan', 'jm707d', 'jm707d@gmail.com', "b42");

    expect(manager.name).toBe('bryan');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getRole()).toBe('Manager')
})