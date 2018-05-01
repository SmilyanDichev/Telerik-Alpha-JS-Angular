const init = (app, data) => {
    const bcrypt = require('bcrypt-nodejs');
    const jwt = require('jwt-simple');
    const moment = require('moment');
    const config = require('../../config/config');

    const login = async (req, res) => {
        const userFound = await data.user.getByEmail(req.email);
        let isPassword;
        let token;
        try {
            if (userFound) {
                isPassword =
                    await bcrypt.compareSync(req.password, userFound.password);
                if (isPassword) {
                    const expire =
                        moment(new Date())
                        .add(config.JWT_EXPIRE_TIME, 'seconds')
                        .unix();

                    const payload = {
                        sub: userFound.id,
                        email: userFound.email,
                        isAdmin: userFound.isAdmin,
                        exp: expire,
                        iss: config.JWT_ISS,
                    };
                    const secret = config.JWT_SECRET;
                    token = jwt.encode(payload, secret);
                }
            }
            if (!userFound) {
                res.send(404).send({
                    msg: 'Email not found',
                });
            }
            if (userFound && !isPassword) {
                res.send(404).send({
                    msg: 'Wrong password',
                });
            }
            if (userFound && isPassword) {
                res.status(200).send({
                    msg: 'Login Success',
                    token: token,
                });
            }
        } catch (exception) {
            if (userFound && !isPassword) {
                res.send(400).send({
                    msg: 'Login Failure',
                });
            }
            throw new Error('Request to create job application rejected!\n' + exception);
        }
    };

    const register = async (req, res) => {
        const authUserData = (userReq) => {
            // TO DO user data aunt
            return true;
        };
        try {
            const isValidUserData = authUserData(req);
            const userFound = await data.user.getByEmail(req.email);
            if (!userFound && isValidUserData) {
                const passwordHashed = await bcrypt.hashSync(req.password);
                const user = {
                    email: req.email,
                    password: passwordHashed,
                    firstName: req.firstName,
                    lastName: req.lastName,
                    isAdmin: false,
                };
                data.user.create(user);
                res.status(200).send({
                    msg: 'Register Success',
                });
            }
        } catch (exception) {
            res.status(400).send({
                msg: 'Register Failure',
            });
            throw new Error('Request to register a user rejected!\n' + exception);
        }
    };

    const applyJob = async (application) => {
            // TO DO responses
        try {
            await data.create({
                comment: application.comment,
                cvUrl: application.cvUrl,
                letterUrl: application.letterUrl,
                JobId: application.jobId,
                UserId: application.userId,
            });
            // res.status(200).send({
            //     msg: 'Job application Success',
            // });
        } catch (exception) {
            // res.status(400).send({
            //     msg: 'Job application Failure'
            // })
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
