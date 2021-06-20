var express=require("express");
var router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

router.get("/", (request, response) => {
    response.render("index", { messages });
});
router.get("/add", (request, response) => {
    response.render("add")
})
router.post("/add", (request, response) => {
    const obj = JSON.parse(JSON.stringify(request.body));
    obj.added = new Date();
    messages.push(obj);
    response.redirect("/");
    // response.redirect("/");
})

module.exports = router;