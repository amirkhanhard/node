import Queue from "bull";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting DB:", err.message);
  }
};

connectDB();

// Schema & Model
const authSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", authSchema);

// Create a new Bull queue
const emailQueue = new Queue("email-queue", {
  redis: { host: "127.0.0.1", port: 6379 },
});

// Producer - add jobs to queue
const sendEmail = async () => {
  for (let i = 0; i <= 5; i++) {
    const jobData = {
      to: `user${i}@example.com`,
      subject: "Welcome!",
      body: "Hello World",
    };

    await emailQueue.add(jobData, {
      attempts: 3, // retry 3 times
      backoff: 5000, // wait 5 sec before retry
    });

    console.log("📤 Job added:", jobData);
  }
};

// Consumer - process jobs
emailQueue.process(async (job) => {
  try {
    console.log("📧 Sending email to:", job.data.to);

    // Save to MongoDB
    await User.create({
      email: job.data.to,
      password: "password123", // generate dynamic if needed
    });

    console.log("✅ Email processed & saved:", job.data.to);
  } catch (err) {
    console.error("❌ Error processing job:", err.message);
  }
});

// Example usage
sendEmail();
