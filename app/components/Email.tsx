'use client'

import { sendEmail } from "@/actions/sendEmail"

export const Email = () => {
  return (
    <button onClick={() => sendEmail({email: 'ahme@test.com'})}>Send Email</button>
  )
}
