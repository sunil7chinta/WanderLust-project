const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const { listingSchema,reviewSchema } = require("./joiSchema");

module.exports.isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in first!");
        return res.redirect("/login");
    }
    return next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
      res.locals.redirectUrl = req.session.redirectUrl;
    }
    return next();
}

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!req.user._id.equals(listing.owner)) {
        req.flash("error", "you don't have permission to make changes!");
        return res.redirect(`/listings/${id}`);
    }
     next();   
}

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id,reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "you are not the author of this review!");
    return res.redirect(`/listings/${id}`);
  } 
  next();
  
};

//joi Listing schema validation
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//joi Review schema validation
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};