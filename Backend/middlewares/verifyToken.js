const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send({ error: "Token is Missing" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = verified;
    console.log(verified);
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid Token" });
  }
};

const verifyGeneralUser = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send({ error: "Token is Missing" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = verified;
    console.log("Verified");
    next();
  } catch (error) {
    console.log("Could not Verify");
    res.status(401).send({ error: "Invalid Token" });
  }
};

const verifyAdmin = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send({ error: "Token is Missing." });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = verified;
    if (verified.role == "admin" || verified.role == "super_admin") {
      next();
    } else {
      res
        .status(401)
        .send({
          error: "User is Unauthorized to perform this action, contact admins.",
        });
    }
  } catch (error) {
    res.status(401).send({ error: "Invalid Token" });
  }
};

module.exports = { verifyGeneralUser, verifyAdmin, verifyToken };
