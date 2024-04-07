// built-in imports
import mongoose from "mongoose";

/**
 * Why do we use this pattern? (Caching the mongodb connection)
 * Because in a serverless functions, each time we're asking to connect to the db before doing anything.
 * That is why, without caching the db connection, our application needs to be connected each time while invoking serverles functions.
 * Which cause inefficient, and exhausting performance.
 *  */
let cached = (global as any).mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

// Our Mongodb connection using Mongoose
export const connectToDatabase = async (): Promise<typeof mongoose> => {
  // if already connected, return the connection.
  if (cached.conn) return cached.conn;

  // if MONGODB_URI is not exist, throw an error
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing!");

  // for the initial time, we connect to our mongodb using mongoose.connect(db_uri)
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
