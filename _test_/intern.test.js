const Intern = require ("../lib/Intern")

test ('getName, getId, getEmail, getSchool', () => {
    const intern = new Intern ("chris", 45, "email6.com", "UofT")
    expect(intern.getName()).toBe("chris");
    expect(intern.getId()).toBe(45);
    expect(intern.getEmail()).toBe("email6.com");
    expect(intern.getSchool()).toBe("UofT");
});