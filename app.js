
const { PrismaClient } = require(`@prisma/client`)

const main = async function () {
  const prisma = new PrismaClient({ errorFormat: `minimal` })

  const test = await prisma.account.findMany()

  console.log(test)
}

main().catch(function (err) {
  console.log(err)
})
