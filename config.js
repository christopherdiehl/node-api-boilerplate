if (process.env.NODE_ENV === "production") ***REMOVED***
  module.exports = ***REMOVED***
    db: 'localhost:27017',
    port: 8080,
    jwtSecret: "production shhh don't tell anyone"
  ***REMOVED***
***REMOVED*** else ***REMOVED***
  module.exports = ***REMOVED***
    db: 'localhost:27017',
    port: 8080,
    jwtSecret: "shhh don't tell anyone"
  ***REMOVED***
***REMOVED***
