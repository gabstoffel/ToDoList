//arquivo usado para testes;
import jwt from 'jsonwebtoken';

const user = {
    id: 20,
    name: 'gabriel',
    usarname: 'gabriel@2022',
    password: '12345678',
}//depois de ocorrido o login de forma bem-sucedida, retorna as info do usuário do banco de dados;

const privateKey = 'ihlakwbfjabkdfohsiobbfd';
const token = jwt.sign(
    {
        id: user.id, 
        usarname: user.usarname,
    },//informações que estão sendo enviadas;
    privateKey,
    {expiresIn: 1000} //quantidade de segundo até a chave expirar;
)
/* console.log(token); */

const returnedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsInVzYXJuYW1lIjoiZ2FicmllbEAyMDIyIiwiaWF0IjoxNjc3MDAwNDIyfQ.bAOqcGV0fsp051Tvxyk_sQXJfIIP25OT0zw14E5zqhM';


const verifiedToken = jwt.verify(returnedToken, privateKey);
console.log(verifiedToken);