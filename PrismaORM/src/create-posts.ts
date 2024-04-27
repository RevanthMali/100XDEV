
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
     title: "title of post",
     author: {
        connect: {
            id: 1
        }
     }
    }
  })
}

main()
  
// https://github.com/100xDevs-hkirat/week-13-prisma