const { verifyPassword } = require('../../app.js');

describe("Fonction verifyPassword", () => {
    test("Devrait Faire plus de 8 characteres", () => {
        expect(verifyPassword('azertyui')).toBe(true)
    })
})


