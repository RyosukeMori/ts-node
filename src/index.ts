import dotenv from 'dotenv'
dotenv.config()
import { out } from '~/module'

const main = async () => {
  console.log(process.env.TEST)
}

main()
setInterval(() => {}, 30000)
