

import UnauthenticatedError from "../error/unauthenticated.js";
import jwt from 'jsonwebtoken'

const auth = async(req , res , next )=>
    {
       
        try {
            const authHeader = req.headers.authorization;
           
            if (!authHeader) {
              throw new UnauthenticatedError("Token unavailable");
            }
        
            const token = authHeader.split(" ")[1];
           
            const payload = jwt.verify(token, process.env.JWT_SECRET);
           
            req.user = {
              userId: payload.userId,
              name: payload.name,
            };
           
        
            next(); 
          } catch (error) {
            return res.status(401).json({ message: "Invalid or expired token" });
          }

   
       
}
export default  auth 