import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name_entity: { type: String, required: true },
    rut:         { type: String, required: true },
    u_address:   { type: String, required: true },
    email:       { type: String, required: true },
    Phone_number:{ type: String },
    user_type:   { type: String }
});

const User = mongoose.model('User', userSchema);

export default User;