import Queue from "bull";
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with mongo db ");
    } catch (err) {
        console.log("error in connecting db "+ err);
    }
}

connectDB();


const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
        type: String,
    },
  },
  { timestamps: true }
);

const AuthSchema = mongoose.model("User", authSchema);

// Create a new queue
const emailQueue = new Queue("email-queue", {
  redis: { host: "127.0.0.1", port: 6379 }
});

// Producer - add jobs to queue
const sendEmail = async (data) => {
for(let i = 0;i<=100000;i++) {
    let data = { to: "user@example"+i+".com", subject: "Welcome!", body: "Hello World" };
    await emailQueue.add(data, {
      attempts: 3, // retry 3 times
      backoff: 5000 // wait 5 sec before retry
    });
    console.log("Job added:", data);
  }
  console.log("Job added - ");
};

// Consumer - process jobs
emailQueue.process(async (job) => {
  // Simulate email sending
  console.log("Email sent  ");
  try {
  AuthSchema.create({email:job.data.to,password:"password"});
  } catch(err) {
      console.log(err.messge);
  }
  console.log("Email sent successfully! "+job.data.to);
});

// Example usage
sendEmail({ to: "user@example.com", subject: "Welcome!", body: "Hello World" });

