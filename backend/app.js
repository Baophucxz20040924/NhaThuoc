const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/thuoc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

const productRoutes = require('./routes/product');

app.use('/api/v1', productRoutes);

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;
