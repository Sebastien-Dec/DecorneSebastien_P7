const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const validateEmail = require('../middleware/functions');
const validateUser = require('../middleware/functions');

// Creating a user
exports.signup = (req, res, next) => {
    validateUser(user),
    validateEmail(email),
    // Password Hash
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: hash,
                type: req.body.type,
                state: req.body.state,
                createdAt: new Date,
                updatedAt: new Date
            };
           User.create(user)
                .then(() => { res.satus(201).json({ messsage: 'Utilisateur créé !' })})
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// User identification
exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email }})
        .then(user => {
            if (!user) {
                return res.status(401).json({ error : 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error : 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        // Verification of the authorization token
                        token: jwt.sign(
                            { userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
