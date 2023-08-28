import { createQueue } from 'kue';

const queue = createQueue();
const data = {
  phoneNumber: '+234 706 3491 456',
  message: 'Hello World!',
};

const job = queue.create('push_notification_code');
job.save();

queue.on('job enqueue', function (id, type) {
  console.log('Notification job created:', id);
});

queue.on('job complete', function (result) {
  console.log('Notification job completed');
});

queue.on('job failed', function (error) {
  console.log('Notification job failed');
});
