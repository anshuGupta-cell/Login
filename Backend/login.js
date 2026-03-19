import pool from "./db.js";

// get details of user
export const getDetails = async (req, res) => {
    const result = await pool.query("SELECT * FROM users")
    console.log(result);
    
    return    res.send(result)
}

// insert data in database
export const insertDetails = async (req, res) => {
    const data = req.body
    const ip =
        req.headers["cf-connecting-ip"] ||
        req.headers["x-forwarded-for"] ||
        req.headers["x-real-ip"] ||
        req.socket.remoteAddress ||
        req.ip

    const result = await pool.query(`INSERT INTO users (ip, date, battery_percentage) VALUES ($1, $2, $3)`, [ip, data.date, data.battery]);

    return res.send('inserted')
}
