
exports.DATABASE_URL = 
    process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/palette";
exports.PORT = process.env.PORT || 8080;
exports.API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';