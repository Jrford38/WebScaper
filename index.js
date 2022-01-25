
const PORT = 3888

const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")



const app = express()

const url = "https://www.giantbomb.com/profile/bigbombomb/lists/big-list-of-stuff/14491/#:~:text=Big%20List%20of%20Stuff%20This%20is%20a%20list,also%20known%20as%2C%20%28by%20nobody%29%20%22Project%20Seinfeld%27s%20List%22."
const result = []

axios(url).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)

    

    $("li", html).each(function () {
        const title = $(this).find("h3").text()
        if (title != ""){
            result.push(title)
        }
    })
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

app.get("/greentest", function routeHandler(req,res){
    res.send(result)
})