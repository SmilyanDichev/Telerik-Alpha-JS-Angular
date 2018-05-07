const init = (app, data) => {
    const bcrypt = require('bcrypt-nodejs');
    const jwt = require('jwt-simple');
    const moment = require('moment');
    const config = require('../../config/config');
    const getAllUsers = async (req, res) => {
        try {
            const usersArr = await data.user.getUsersWithUserJobs();
            return usersArr;
        } catch (exception) {
            console.log(`-------------->
                Request to get all users
                with application number
                rejected in user controller! `,
                exception);

            res.status(502).json({
                msg: 'Request to create job rejected in user controller!',
                err: exception,
        });
    }
};
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
            throw new Error(`Request to create job application rejected! `
             + exception);
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
            throw new Error(`Request to register a user rejected! `
             + exception);
        }
    };

    const applyJob = async (application, res) => {
            // TO DO responses
        try {
            await data.userJob.create({
                comment: application.comment,
                cvUrl: application.cvUrl,
                letterUrl: application.letterUrl,
                JobId: application.jobId,
                UserId: application.userId,
            });

        } catch (exception) {
            res.status(400).send({
                msg: 'Job application Failure',
            });
            throw new Error(`Request to create job application rejected! `
             + exception);
        }
    };

    return {
        login,
        register,
        applyJob,
        getAllUsers,
    };
};

module.exports = {
    init,
};

