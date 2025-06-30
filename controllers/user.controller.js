const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createUser = async (req, res) => {
    const { firstName, lastName, age } = req.body

    try {
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                age
            }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' })
    }
}

const getUsers = async (req, res) => {
    console.log('📥 Request received to /api/users');

    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: { id }
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' })
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById
}