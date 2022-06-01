const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const catagorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
catagorySchema.plugin(toJSON);
catagorySchema.plugin(paginate);

const Catagory = mongoose.model('Catagory', catagorySchema);

module.exports = Catagory;
