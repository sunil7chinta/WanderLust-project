const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedin, isOwner, validateListing } = require("../Middleware");

const { storage } = require("../cloudConfig");
const multer = require("multer");
const upload = multer({ storage });

const listingsController = require("../controllers/listings");

router
  .route("/")
  //all listings
  .get(wrapAsync(listingsController.listings))
  //newly created listings
  .post(
    isLoggedin,
    upload.single("listing[image]"), 
    validateListing,
    wrapAsync(listingsController.createListing)
  );

//form for new listing
router.get("/new", isLoggedin, listingsController.renderNewForm);

router
  .route("/:id")
  //show listing
  .get(wrapAsync(listingsController.showListings))
  //updated lsiting
  .put(
    isLoggedin,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingsController.updateListing)
  )
  //destroy listing
  .delete(isLoggedin, isOwner, wrapAsync(listingsController.destroyListing));

//listing edit form
router.get(
  "/:id/edit",
  isLoggedin,
  isOwner,
  wrapAsync(listingsController.renderEditForm)
);

module.exports = router;
