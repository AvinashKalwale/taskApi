const express = require("express");
const bodyparser = require("body-parser")
const TaskDetails = require("./module/taskSchema");
const app = express();
app.use(bodyparser());

app.get("/v1/tasks", (req, res) => {
    res.send({
        tasks: [
            { id: 1, title: "Test Task 1", is_completed: true },
            { id: 2, title: "Test Task 2", is_completed: false }
        ]
    })
})

app.get("/v1/tasks/:id", async (req, res) => {
    try {
        const tasks = await TaskDetails.find({
            Tasks: req.query
        })
        res.status(200).json({
            status: "sucess",
            tasks
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.post("/v1/tasks", async (req, res) => {
    try {
        const tasks = await TaskDetails.create(req.body)
        res.status(200).json({
            status: "sucess",
            tasks
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})

app.post("/v1/tasks", async (req, res) => {
    try {
        const tasks = await TaskDetails.create(req.body)
        res.status(200).json({
            status: "sucess",
            tasks
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.put("/v1/tasks/:id", async (req, res) => {
    try {
        const tasks = await TaskDetails.updateMany({ id: req.params.id }, req.body)
        res.status(204).json({
            status: "sucess",
            tasks
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.delete("/v1/tasks/:id", async (req, res) => {
    try {
        const tasks = await TaskDetails.deleteOne({ _id: req.params.id })
        res.status(204).json({
            status: "sucess",
            tasks
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.delete("/v1/tasks/:id", async (req, res) => {
    try {
        const tasks = await TaskDetails.deleteMany({ _id: req.params.id })
        res.status(204).json({
            status: "sucess",
            tasks
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})

app.listen(3000, () => {
    console.log("server is running at 3000")
})