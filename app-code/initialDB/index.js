const mongoose = require("mongoose");
const Listing = require("../models/listing");
const data = require("./data");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main()
  .then((res) => {
    console.log("connected DB");
  })
  .catch((err) => {
    console.log(err);
  });

//Initialize Database
const initializeDB = async () => {
  await Listing.deleteMany({});
  data.listingData = data.listingData.map((obj) => ({
    ...obj,
    owner: "65757bfdc787cc36024bb1fe",
  }));
  await Listing.insertMany(data.listingData);
  console.log("Data initialized");
};

initializeDB();
