const express = require('express');
const dotenv = require('dotenv');
const Airtable = require('airtable');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
const tableName = process.env.AIRTABLE_TABLE_NAME;

app.post('/submit', async (req, res) => {
    const { nombre, email, telefono, estado } = req.body;

    if (!nombre || !email || !telefono || !estado) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        const record = await base(tableName).create({
            Name: nombre,
            phone: telefono,
            email: email,
            estado: estado,
        });
        res.status(200).json({ message: 'Formulario enviado correctamente.', record });
    } catch (error) {
        if (error.response) {
            console.error('Error en la respuesta de Airtable:', error.response.data);
            res.status(error.response.status).json({
                message: 'Error en Airtable.',
                details: error.response.data,
            });
        } else {
            console.error('Error en el servidor:', error.message);
            res.status(500).json({ message: 'Error en el servidor.', details: error.message });
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
