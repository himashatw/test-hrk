const express = require('express')
const app = express();

const PORT = process.env.PORT || 8080

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello User"
    })
})

app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})
