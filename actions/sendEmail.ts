'use server'

import { myQueue } from "@/background/queues/foo"

export const sendEmail = async (client) => {
  console.log(process.env.DB_URL)
  console.log('sending email to' + client.email)
  await myQueue.add('job1', {email: client.email}, {attempts: 3})
  return client
}