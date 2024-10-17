import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = mongoose.connect(uri);
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = mongoose.connect(uri);
}

export { clientPromise };