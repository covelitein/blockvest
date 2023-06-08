export const requireUser = (req, res, next)=> {
    
    if(!req.user) return res.status(403).send({error: "invalid session" });

    return next()
}