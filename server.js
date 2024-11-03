
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();



app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Numerical API",
            version: "1.0.0",
            description: "Numerical API Information",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["server.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// List all root entries
app.get('/api/root', async (req, res) => {
    try {
        const listRoot = await prisma.root.findMany();
        res.status(200).json(listRoot); // ส่ง status 200 พร้อมรายการข้อมูล
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Server error" });
    }
});
/**
 * @swagger
 * /api/root:
 *   get:
 *     description: List all root entries
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */

// List all diff entries
app.get('/api/diff', async (req, res) => {
    try {
        const listDiff = await prisma.diff.findMany();
        res.status(200).json(listDiff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Server error" });
    }
});
/**
 * @swagger
 * /api/diff:
 *   get:
 *     description: List all diff entries
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */


// List all integral entries
app.get('/api/integral', async (req, res) => {
    try {
        const listIntegral = await prisma.integral.findMany();
        res.status(200).json(listIntegral);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Server error" });
    }
});
/**
 * @swagger
 * /api/integral:
 *   get:
 *     description: List all integral entries
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */


app.get('/api/expo', async (req, res) => {
    try {
        const listExponential = await prisma.exponential.findMany();
        res.status(200).json(listExponential);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Server error" });
    }
});
/**
 * @swagger
 * /api/expo:
 *   get:
 *     description: List all exponential entries
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */



app.get('/api/inter', async (req, res) => {
    try {
        const listInterpolation = await prisma.interpolation.findMany();
        res.status(200).json(listInterpolation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Server error" });
    }
});
/**
 * @swagger
 * /api/inter:
 *   get:
 *     description: List all interpolation entries
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
