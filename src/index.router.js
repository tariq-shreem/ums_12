import { connectDB } from "../DB/connection.js";
import userRouter from './modules/user/user.router.js';
import authRouter from './modules/auth/auth.router.js';
import blogRouter from './modules/blog/blog.router.js';
import cors from 'cors';
const initApp =(app,express)=>{
    connectDB();
    app.use(cors());
    app.use(express.json());
    //localhost:3000/users
    app.use('/users', userRouter);
    //localhost:3000/auth
    app.use('/auth', authRouter);
    //localhost:3000/blogs
    app.use('/blogs',blogRouter);
    app.use( (err,req,res,next)=>{
            return res.status(err.statusCode).json({msg:err.message});
    } );
}
export default initApp;