
// get details of user
export const getDetails = (req, res) => {
    const ip =
        req.headers["cf-connecting-ip"] ||
        req.headers["x-forwarded-for"] ||
        req.headers["x-real-ip"] ||
        req.socket.remoteAddress ||
        req.ip

    return res.json({ ip })
}
