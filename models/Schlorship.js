const mongoose = require("mongoose");

const SchlorshipRef = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide schlorship name"],
    },
    region: [
        {
            type: Number,
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
    annualIncome:
        {
            type: Number,
            ref: 'AnnualIncome'
        }
    ,
    percentage: 
        {
            type: Number,
            ref: 'Percentage'
        }
    ,
    age: {
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
    examList: [
        {
            type: Number,
            ref: 'examList'
        },
    ],
});
const Schlorship = mongoose.model("Schlorship", SchlorshipRef);

module.exports = Schlorship;