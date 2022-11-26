const Engineer = require ("../lib/Engineer")

test ('getName, getId, getEmail, github', () => {
    const engineer = new Engineer ("paul", 26, "email2.com", "githubEng")
    expect(engineer.getName()).toBe("paul");
    expect(engineer.getId()).toBe(26);
    expect(engineer.getEmail()).toBe("email2.com");
    expect(engineer.getGitHub()).toBe("githubEng");
});