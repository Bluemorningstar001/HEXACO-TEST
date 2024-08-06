const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/hexaco', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const VisitorSchema = new mongoose.Schema({
    date: { type: String, required: true },
    totalVisitors: { type: Number, default: 0 },
    todayVisitors: { type: Number, default: 0 },
    testCount: { type: Number, default: 0 },
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

app.get('/api/visitor', async (req, res) => {
    const today = new Date().toLocaleDateString();
    let visitor = await Visitor.findOne({ date: today });
    if (!visitor) {
        visitor = new Visitor({ date: today });
        await visitor.save();
    }
    res.json(visitor);
});

app.post('/api/visitor', async (req, res) => {
    const { type } = req.body;
    const today = new Date().toLocaleDateString();
    let visitor = await Visitor.findOne({ date: today });
    if (!visitor) {
        visitor = new Visitor({ date: today });
    }
    if (type === 'visit') {
        visitor.totalVisitors++;
        visitor.todayVisitors++;
    } else if (type === 'test') {
        visitor.testCount++;
    }
    await visitor.save();
    res.json(visitor);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
