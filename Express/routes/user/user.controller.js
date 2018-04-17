const init = (app, data) => {
    const bcrypt = require('bcrypt-nodejs');
    const uuid = require('uuid/v4');
    const jwt = require('jwt-simple');
    const moment = require('moment');

    const config = require('../../config');

    const login = () => {
        return async (req, res) => {
            const userFound = await data.user.getUserByEmail(req.body.email);
            if (userFound) {
                const isPassword =
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
                    const token = jwt.encode(payload, secret);

                    res.status(200).send({
                        token: token,
                    });
                }
            }
        };
    };

    const register = () => {
        return async (req, res) => {
            const authUserData=(userReq) => {
                    // TO DO user data aunt
                    return true;
            };
            const isValidUserData = authUserData(req);
            const userFound = await data.user.getUserByEmail(req.body.email);
            if (!userFound && isValidUserData) {
                const saltRounds = 10;
                const passwordHashed =
                bcrypt.hash(req.body.password, saltRounds);
                const user= {
                    id: uuid(),
                    email: req.body.email,
                    password: passwordHashed,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    isAdmin: false,
                };
                data.user.create(user);
            }
        };
    };
};

module.exports = {
    init,
};


