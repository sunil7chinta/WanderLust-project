const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { validateReview, isLoggedin, isReviewAuthor } = require("../Middleware");

const reviewController = require("../controllers/reviews");

//Review
//post  review route
router.post(
  "/",
  isLoggedin,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedin,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
