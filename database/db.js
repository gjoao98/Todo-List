const mongoose = require("mongoose");

const conectDB = () => {
    mongoose
        .connect(
            process.env.DB_URI,
        )
        .then(() => console.log("Mongo DB Conected!"))
        .catch((err) => console.log(err));
};

module.exports = conectDB;