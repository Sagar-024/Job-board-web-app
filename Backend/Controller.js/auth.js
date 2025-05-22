import User from '../DB/model.js/user.js';
import StatusCodes from 'http-status-codes';
import BadRequestError from '../error/bad-request.js'
import UnauthenticatedError from '../error/unauthenticated.js'

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      email ,
      name ,
      password 
    });

    const token = user.createJwt();

    res.status(StatusCodes.OK).json({  user :{ name : user.name },  token });
    
  } catch (e) {
    res.status( StatusCodes.CREATED).json({ message : e.message});
 
  }
};




const login = async (req, res) => {
  const { email, password } = req.body; 

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const isMatch = await user.comparepassword(password); 
  if (!isMatch) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const token = user.createJwt();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token }); 
};

export { signup, login };
