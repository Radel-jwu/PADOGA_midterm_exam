const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://username:password@localhost:3306/midterm_db', {
  dialect: 'mysql',
  logging: false,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});



testConnection();

module.exports = { sequelize };


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });