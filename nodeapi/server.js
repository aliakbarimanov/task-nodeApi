const express = require("express");

const { default: mongoose } = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.DATABASE_SERVER_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });


const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

const PORT = process.env.PORT || 9001
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));