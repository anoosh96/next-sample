import { Queue } from 'bullmq';
//import { RedisConnection } from 'bullmq/dist/esm/classes/redis-connection';

const redisConnection = {
  host: 'localhost', // Redis server host
  port: 6379, // Redis server port
  // Add other options as needed (e.g., password)
};

export const myQueue = new Queue('foo', {
  connection: redisConnection
});
