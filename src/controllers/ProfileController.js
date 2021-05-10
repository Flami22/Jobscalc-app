const Profile = require('../model/Profile')
module.exports = {
    index(req, res) {
        return res.render("profile", { profile: Profile.get() })
    },

    update(req, res) {
        //req.body para pegar os dados
        const data = req.body
        // definir quantas semanas tem um ano: 52
        const weeksPerYear = 52
        //remover as semanas de ferias do ano, pegar quantas semanas tem 1 mes
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
        // total de horas trabalhada na semana
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
        // total de horas trabalhada no mes
        const monthlyTotalHours = weekTotalHours * weeksPerMonth
        // qual será o valor da minha hora ?
        const valueHour = data["monthly-budget"] / monthlyTotalHours

        Profile.update({
            // aqui eu to pegando os dados do data e espalhando
            ...Profile.get(),
            // aqui o que foi alterado e sobrescrito 
            ...req.body,

            "value-hour": valueHour

        })

        return res.redirect('/profile')

    }
}