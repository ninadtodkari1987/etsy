function FavoriteListings() {
  this.listings = [];
}

FavoriteListings.prototype.isListingFavorited = function(listing) {
  for (var i = 0; i < this.listings.length; i++) {
    if (this.listings[i].listing_id == listing.listing_id) {
      return true;
    }
  }
  return false;
}

FavoriteListings.prototype.addListing = function(listing) {
  // 2. Fix the double favoriting bug.
  // check if listing is already available
  // if yes, do not add
  // else push
  this.listings.push(listing);
};

FavoriteListings.prototype.removeListing = function(listing) {
// 5. Make it possible to un-favorite listings.
  // check if the item we want to DELETE is present, if present remove it.
  // get that index and save it to index variable
  this.listings.splice(index, 1);
};


FavoriteListings.prototype.getFavorites = function() {
  return this.listings;
}

module.exports = FavoriteListings;