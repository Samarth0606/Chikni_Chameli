const mongoose = require('mongoose');

const netaSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    party: String,
    isMale: Boolean,
    isCorrupt: Boolean
});

const NetaModel = mongoose.model('Neta' , netaSchema);

module.exports = NetaModel;

