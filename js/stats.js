
let userCount = 0;

app.get('/api/user-count', (req, res) => {
    res.json({ count: userCount });
});


app.post('/api/increment-user', (req, res) => {
    userCount++;
    res.json({ count: userCount });
});
