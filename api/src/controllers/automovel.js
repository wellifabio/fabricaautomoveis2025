const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    automoveis = await prisma.automovel.findMany();
    res.json(automoveis);
};

module.exports = {
    read
};
