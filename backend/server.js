import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import authRoutes from "./routes/authRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";
// import userRoutes from "./routes/userRoutes.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,io,server} from "./socket/socket.js";


dotenv.config();

const _dirname=path.resolve();
const PORT=process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());

app.use("/app/auth",authRoutes);
app.use("/app/message",messageRoutes);
app.use("/api/user",userRoutes);


app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);   
});



