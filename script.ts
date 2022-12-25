import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // queries to be executed here

    // creating a user
    // const newUser = await prisma.user.create({ data: { name: "Bhaskar" } })
    // console.log(newUser);

    // list all users
    // const allUsers = await prisma.user.findMany();
    // console.table(allUsers)

    // deleting a user
    // const status = await prisma.user.delete({where:{id:2}})
    // console.log(status)

    await prisma.user.deleteMany()
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    })
