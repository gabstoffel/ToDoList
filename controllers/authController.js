import jwt from 'jsonwebtoken';
async function tokenVerification (req, res){
    const token = req.header('validation-token');
    if(!token){return res.status(401).send('access denied')};
    try{
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRETKEY);
        req.user = verifiedToken;
        next();
    } catch(err){
        res.send('access denied, you do not have a valid token');
    }

}
export default tokenVerification;