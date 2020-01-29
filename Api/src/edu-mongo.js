import Mongoose, {model, models, Schema} from 'mongoose';
let UserModel;

//Set up default mongoose connection
const mongoDB = 'mongodb://0.0.0.0:27017/EduAppData';

Mongoose.set('useNewUrlParser', true);
Mongoose.set('useUnifiedTopology', true);
Mongoose.set('useFindAndModify', false);
Mongoose.set('useCreateIndex', true);

Mongoose.connect(mongoDB);

 //Get the default connection
const db = Mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*  start mongodb schema and model  */
if(models.users){
    UserModel = models.users;
}else{
    const UserSchema = new Schema({
        user: {type: String},
        password: {type: String},
        rePassword: {type: String},
        createdOn: {type: Date, default: Date(Date.now())},
        lastAccess: {type: Date, default: Date(Date.now())}
    });//endSchema;
    UserModel = model('users', UserSchema);
};//endUserModel;


export default {
    Users: UserModel
}