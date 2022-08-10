import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {useNewUrlParser: true,
        dbName: 'writing_prompts'
    }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const Genre = db.collection('Genres');

const Protagonist = db.collection('Protagonists');

const Conflict = db.collection('Conflicts');

const Antagonist = db.collection('Antagonists');

const findRandomGenre = () => {
    const random = Math.floor(Math.random() * Genre.length)
    const randGenre = Genre.findOne().skip(random);
    console.log(randGenre)
    return randGenre.exec();
};

const findRandomProtagonist = async () => {
    const randProtagonist = await Protagonist.aggregate().sample(1).exec();
    return randProtagonist;
};

const findRandomConflict = async () => {
    const randConflict = await Conflict.aggregate().sample(1).exec();
    return randConflict;
};

const findRandomAntagonist = async () => {
    const randAntagonist = await Antagonist.aggregate().sample(1).exec();
    return randAntagonist;
};

export { findRandomGenre, findRandomProtagonist, findRandomConflict, findRandomAntagonist };