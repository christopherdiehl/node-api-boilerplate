if (process.env.NODE_ENV === "production") {
  module.exports = {
    db: 'localhost:27017',
    port: 8080,
    jwtSecret: "production shhh don't tell anyone"
  }
} else {
  module.exports = {
    db: 'localhost:27017',
    port: 8080,
    jwtSecret: "shhh don't tell anyone"
  }
}
