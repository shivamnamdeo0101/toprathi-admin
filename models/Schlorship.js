const mongoose = require("mongoose");

const SchlorshipRef = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide schlorship name"],
    },
    region: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Region'
        }
    ],
    schlorshipData: {
        type: mongoose.SchemaTypes.Mixed,
    },
    updateAt: {
        type: Number,
        default: Date.now()
    },
    addAt: {
        type: Number,
        default: Date.now()
    },
    caste: [
        {
            type: Number,
            ref: 'Caste'
        }
    ],
    annualIncome: {
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },

    },
    percentage: {
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },

    },
      
    authority: [
        {
            type: Number,
            ref: 'Authority'
        }
    ],
    educationType: [
        {
            type: Number,
            ref: 'EducationType'
        },
    ],
    gender: [
        {
            type: Number,
        },
    ],
    fromWhere: [
        {
            type: Number,
            ref: 'FromWhere'
        },
    ],
});
const Schlorship = mongoose.model("Schlorship", SchlorshipRef);

module.exports = Schlorship;