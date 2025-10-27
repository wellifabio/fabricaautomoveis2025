const {prismaClient} = require('@prisma/client');
const prisma = new prismaClient();

const read = async (req, res) => {
    automoveis = await prisma.automovel.findMany();
    res.json(automoveis);
};

module.exports = {
    read
};
