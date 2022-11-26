

const Manager = require ("../lib/Manager")

test ('getName, getId, getEmail, getOfficeNumber', () => {
    const manager = new Manager ("Megan", 34, "email12.com", "124215")
    expect(manager.getName()).toBe("Megan");
    expect(manager.getId()).toBe(34);
    expect(manager.getEmail()).toBe("email12.com");
    expect(manager.getOfficeNumber()).toBe("124215");
});