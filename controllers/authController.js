import jwt from 'jsonwebtoken';
async function tokenVerification (req, res, next){
    const token = req.header('validation-token');
    if(!token){return res.status(401).send('access denied')};
    try{
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRETKEY);
        console.log(token);
        req.user = verifiedToken;
        next()
    } catch(err){
        res.status(400).send(err);
    }

}
export default tokenVerification;