const Employee = require ("../lib/Employee")


test ('getName, getId, getEmail', () => {
    const employee = new Employee ("dex", 23, "email.com")
    expect(employee.getName()).toBe("dex");
    expect(employee.getId()).toBe(23);
    expect(employee.getEmail()).toBe("email.com");
});