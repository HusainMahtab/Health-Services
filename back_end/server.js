import express from "express"
import connectDB from "./db/db_connection.js"
import cors from "cors"
const app=express()
const port=3000
app.use(cors({
    origin: "https://health-services-1.onrender.com",
    credentials: true, // Allow cookies and credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Ensure headers are allowed
  }));
  
  // Handle OPTIONS preflight requests automatically
  app.options('*', cors());

// connect with db
connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import service route
import Router from "./routes/service.routes.js"
app.use("/api/services",Router)

app.listen(port,()=>{
    console.log(`app is live at port:${port}`)
})
