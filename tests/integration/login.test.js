const request = require('supertest')
const { app } = require('../../app')

describe("Tester /login", () => {
    it("Devrait retourner 200 si l'email contient @ et le pw est > 8 chars", async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: "ninaw@gmail.com", password: "12345678" })

        expect(res.status).toBe(200)
        expect(res.body.message).toBe('Connexion réussie !')
    })
})

