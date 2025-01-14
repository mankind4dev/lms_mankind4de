require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";

export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie-parser
// sending data cookie parser from frontend to the backend server
app.use(cookieParser());

// cors => cross origin resource sharing
//
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// testing API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working properly",
  });
});

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(
    `Route your trying to reach ${req.originalUrl} is not found`
  ) as any;
  err.statusCode = 404;
  next(err);
});
