const JobController = require("../controllers/JobController");

let data = [
    {
        id: 1,
        name: "Site da pls",
        "daily-hours": 5,
        "total-hours": 1,
        created_at: Date.now(),

    },
    {
        id: 2,
        name: "Site da vipmodas",
        "daily-hours": 6,
        "total-hours": 80,
        created_at: Date.now(),

    }
];

module.exports = {
    get() {
        return data
    },
    update(newJob) {
        data = newJob
    },
    delete(id) {
        data = data.filter(job => Number(job.id) === Number(id))
    }
}