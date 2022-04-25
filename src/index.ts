import app from './app';
import cloudinaryConfig from './config/cloudinary.config';
import { mongooseConnection } from './config/mongoose.config';

cloudinaryConfig();

mongooseConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));