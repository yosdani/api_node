module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        isTcp: {
            type: Sequelize.BOOLEAN
        },
        avatar: {
            type: Sequelize.STRING
        },
        ocupation: {
            type: Sequelize.STRING
        },
    });

    return User;
};


