const Queue = require("bull");

// Create a new queue
const emailQueue = new Queue("email-queue", {
  redis: { host: "127.0.0.1", port: 6379 }
});

// Producer - add jobs to queue
const sendEmail = async (data) => {
  await emailQueue.add(data, {
    attempts: 3, // retry 3 times
    backoff: 5000 // wait 5 sec before retry
  });
  console.log("Job added:", data);
};

// Consumer - process jobs
emailQueue.process(async (job) => {
  console.log(`Processing email to: ${job.data.to}`);
  // Simulate email sending
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Email sent successfully!");
});

// Example usage
sendEmail({ to: "user@example.com", subject: "Welcome!", body: "Hello World" });
