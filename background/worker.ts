//require('dotenv').config();
const { loadEnvConfig } = require('@next/env')
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

import { Worker } from 'bullmq'

console.log('worker is running')
console.log(process.env.DB_URL)

const redisConnection = {
  host: 'localhost', // Redis server host
  port: 6379, // Redis server port
  // Add other options as needed (e.g., password)
};

const worker = new Worker(
  'foo',
  async (job) => {
    console.log('processing job')
    console.log(job.data)
  },
  {
    connection: redisConnection
  }
)