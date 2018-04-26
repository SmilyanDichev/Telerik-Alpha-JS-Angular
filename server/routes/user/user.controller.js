const init = (app, data) => {
    const bcrypt = require('bcrypt-nodejs');
    const jwt = require('jwt-simple');
    const moment = require('moment');
    const config = require('../../config/config');
    const login = () => {
        try {
            return async (req, res) => {
                const userFound = await data.user.getUserByEmail(req.body.email);
                let isPassword;
                let token;
                if (userFound) {
                    isPassword =
                        bcrypt.compare(req.body.password, userFound.password);
                    if (isPassword) {
                        const expire =
                            moment(new Date())
                            .add(config.JWT_EXPIRE_TIME, 'seconds')
                            .unix();

                        const payload = {
                            sub: userFound.id,
                            email: userFound.email,
                            password: userFound.password,
                            exp: expire,
                            iss: config.JWT_ISS,
                        };

                        const secret = config.JWT_SECRET;
                        token = jwt.encode(payload, secret);
                    }
                }
                // Response managment
                if (!userFound) {
                    res.send(404).send({
                        msg: 'Email not found',
                    });
                }
                if (userFound & !isPassword) {
                    res.send(404).send({
                        msg: 'Wrong password',
                    });
                }
                if (userFound & isPassword) {
                    res.status(200).send({
                        msg: 'Login Success',
                        token: token,
                    });
                }
            }
        } catch (exception) {
            if (userFound & !isPassword) {
                res.send(400).send({
                    msg: 'Login Failure',
                });
            }
            throw new Error('Request to create job application rejected!\n' + exception);
        }
    };
    const register = () => {
        try {
            return async (req, res) => {
                const authUserData = (userReq) => {
                    // TO DO user data aunt
                    return true;
                };
                const isValidUserData = authUserData(req);
                const userFound = await data.user.getUserByEmail(req.body.email);
                if (!userFound && isValidUserData) {
                    const saltRounds = 10;
                    const passwordHashed =
                        bcrypt.hash(req.body.password, saltRounds);
                    const user = {
                        email: req.body.email,
                        password: passwordHashed,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        isAdmin: false,
                    };
                    data.user.create(user);
                    res.status(200).send({
                        msg: 'Register Success',
                    });
                }
            };
        } catch (exception) {
            res.status(400).send({
                msg: 'Register Failure'
            })
            throw new Error('Request to register a user rejected!\n' + exception);
        }
    }
};
const applyJob = async (application) => {
    try {
        await data.create({
            comment: application.comment,
            cvUrl: application.cvUrl,
            letterUrl: application.letterUrl,
            JobId: application.jobId,
            UserId: application.userId,
        });
        res.status(200).send({
            msg: 'Job application Success',
        });
    } catch (exception) {
        res.status(400).send({
            msg: 'Job application Failure'
        })
        throw new Error('Request to create job application rejected!\n' + exception);
    }
};
return {
    login,
    register,
    applyJob,
};
};

module.exports = {
    init,
};