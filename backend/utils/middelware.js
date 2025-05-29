const { SECRET } = require("./config");

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const tokenExtractor = async (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = authorization.substring(7);

      request.decodedToken = jwt.verify(token, SECRET);
    } catch (error) {
      response.status(401).json({ error: "invalid token" });
    }
  } else {
    response.json({ error: "missing token" });
  }

  next();
};

module.exports = {
  unknownEndpoint,
};
