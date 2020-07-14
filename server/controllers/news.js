const admin = require("../models/newsSchema.js");


class NewsController {

    async savenew(req, res) {

        const newData = JSON.parse(req.body.newNews);
        let newNews = [];

        try {

            for (let i = 0; i < newData.length; i++) {

                let updatedData = {

                    id: newData[i].id,
                    title: newData[i].title,
                    subtitle: newData[i].subtitle,
                    text: newData[i].text,
                    image: newData[i].image,

                }
                let currentIdFilter = { id: newData[i].id }
                let updatedNew = await admin.findOneAndUpdate(currentIdFilter, updatedData, { new: true });

                newNews.push(updatedNew);

            }
            res.status(200).send(newNews);
        }

        catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    }

    async create(req, res) {

        try {
            let { id, title, subtitle, image, text } = req.body;

            const newNew = await admin.create({ id, title, subtitle, image, text });

            res.status(200).send({ message: "News correctly added", newNew });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req, res) {

        try {

            let newsToDelete = req.body.id

            const deletedNew = await admin.deleteOne({ id: newsToDelete });

            res.status(200).send({ message: "News correctly deleted", deletedNew });
        }

        catch (error) {

            res.status(500).send(error);

        }
    }

    async read(req, res) {

        try {

            const allNews = await admin.find({});

            res.status(200).send(allNews);
        }
        catch (error) {

            res.status(500).send(error);
        }

    }

}


module.exports = new NewsController;