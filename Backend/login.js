import pool from "./db.js";

// get details of user
export const getDetails = async (req, res) => {
    const key = req.query.key

    if (key === process.env.SECRET_KEY) {
        const result = await pool.query("select * from users order by uid desc")
        console.log(result);
        return res.json(result, { success: true })
    }

    return res.send({ success: false })

}

// insert data in database
export const insertDetails = async (req, res) => {
    const data = req.body
    const platform = req.headers['sec-ch-ua-platform'];
    const userAgent = req.headers['user-agent'];
    console.log(typeof platform, typeof userAgent);
    // console.log(data);

    const ip =
        req.headers["cf-connecting-ip"] ||
        req.headers["x-forwarded-for"] ||
        req.headers["x-real-ip"] ||
        req.socket.remoteAddress ||
        req.ip

    const result = await pool.query(`INSERT INTO users (ip, ipv4, date, battery_percentage, platform, user_agent) VALUES ($1, $2, $3, $4, $5, $6)`, [ip, data.ipv4, data.date, data.battery, platform, userAgent]);

    return res.send('inserted')
}
