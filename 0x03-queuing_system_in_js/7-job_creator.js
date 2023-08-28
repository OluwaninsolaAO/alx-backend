import { createQueue } from 'kue';

const queue = createQueue();
const qName = 'push_notification_code_2';
const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account',
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account',
  },
];

queue.on('job enqueue', function (id, type) {
  console.log('Notification job created:', id);
});

queue.on('job complete', function (job) {
  console.log('Notification job', job.id, 'completed');
});

queue.on('job failed', function (job, error) {
  console.log('Notification job', job.id, 'failed:', error);
});

queue.on('job progress', function (job, progress) {
  console.log('Notification job', job.id, `${progress}%`, 'complete');
});

for (const data of jobs) {
  const job = queue.create(qName, data);
  job.save();
}
