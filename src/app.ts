import app from "./config"

app.listen(3000, () => {
    console.table({
        Status: "Working",
        Port: 3000
    })
})