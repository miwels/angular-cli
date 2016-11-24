exports.insert = function(req, res, next)
{
    var db = req.db;

    var data = {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        country: req.body.country
    };

    db.collection('userdata').insertOne(data, function(err, data) {
        if(err) throw new Error("Error inserting user in the database");

        var output = {
            status: 'OK',
            message: 'Profile inserted in the database'
        };

        res.send(JSON.stringify(output));
    });
};