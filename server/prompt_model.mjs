import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {useNewUrlParser: true}
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const genresSchema = mongoose.Schema({
    name: {type: String, required: true}
});

const protagonistsSchema = mongoose.Schema({
    name: {type: String, required: true}
});

const conflictsSchema = mongoose.Schema({
    name: {type: String, required: true}
});

const antagonistsSchema = mongoose.Schema({
    name: {type: String, required: true}
});

const Genre = mongoose.model('Genre', genresSchema);

const Protagonist = mongoose.model('Protagonist', protagonistsSchema);

const Conflict = mongoose.model('Conflict', conflictsSchema);

const Antagonist = mongoose.model('Antagonist', antagonistsSchema);

const findRandomGenre = async () => {
    const randGenre = await Genre.aggregate().sample(1);
    return randGenre.exec();
};

const findRandomProtagonist = async () => {
    const randProtagonist = await Protagonist.aggregate().sample(1);
    return randProtagonist.exec();
};

const findRandomConflict = async () => {
    const randConflict = await Conflict.aggregate().sample(1);
    return randConflict.exec();
};

const findRandomAntagonist = async () => {
    const randAntagonist = await Antagonist.aggregate().sample(1);
    return randAntagonist.exec();
};

export { findRandomGenre, findRandomProtagonist, findRandomConflict, findRandomAntagonist }