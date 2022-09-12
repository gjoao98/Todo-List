const mongoose = require("mongoose");

const conectDB = () => {
    mongoose
        .connect(
            "mongodb+srv://root:admin@todo-list.vckptzi.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log("Mongo DB Conected!"))
        .catch((err) => console.log(err));
};

module.exports = conectDB;