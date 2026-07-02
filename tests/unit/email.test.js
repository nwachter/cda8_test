const { verifyEmail } = require('../../app.js');

describe("Fonction verifyEmail", () => {
    it("devrait retourner true si l'email contient un arobase", () => {
        expect(verifyEmail('ninaw@gmail.com')).toBe(true);
    });

    it("devrait retourner false si l'email ne contient pas un arobase", () => {
        expect(verifyEmail('ninawAtgmail.com')).toBe(false);
    });
});