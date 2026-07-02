const express = require('express')

function verifyEmail(email) {
    //test si le string email contient arobase
    return email.includes('@');
}

function verifyPassword(password) {
    //test si le string password contient au moins 8 caractères
    return password.length >= 8;
}


const app = express()

//middleware express.json
app.use(express.json())

//sert les fichiers statiques du dossier public (ex: /index.html)
app.use(express.static('public'))


app.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!verifyEmail(email) || !verifyPassword(password)) {
        return res.status(400).json({ message: "Connexion ratée !" })
    } else {
        return res.status(200).json({ message: "Connexion réussie !" })
    }
})





module.exports = { app, verifyEmail, verifyPassword };