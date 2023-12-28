import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: 'https://eu1-fluent-lacewing-39112.upstash.io',
  token: 'AZjIASQgYjdmYjE2NDAtODlhYi00NGQ2LWE1ODYtYzE2YzJlMTcyODY0ZDU4NDBlZTliNmY1NGE5MTk5ZWI4NGE3MWQyYWM2MTc=',
})
