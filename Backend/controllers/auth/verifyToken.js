async function verifyTokenController(req, res){
    res
        .status(200)
        .send({ role: req.user.role, profile_pic: req.user.profile_pic, username: req.user.username });
}

module.exports = verifyTokenController

