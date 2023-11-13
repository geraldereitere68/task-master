// complex_code.js

/* This code demonstrates a complex implementation of an image gallery with various functionalities:
- Displaying multiple images in a grid layout
- Supporting pagination to browse through large collections
- Implementing a search feature to filter images
- Enabling sorting by different criteria
- Implementing image upload and deletion functionality */

// Image class representing an image with properties like id, title, description, and imageUrl
class Image {
  constructor(id, title, description, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

// Gallery class representing the image gallery with various functionality
class Gallery {
  constructor() {
    this.images = []; // Collection of images
    this.currentPage = 1; // Current page of pagination
    this.pageSize = 10; // Number of images per page
  }

  // Method to add images to the gallery
  addImage(image) {
    this.images.push(image);
  }

  // Method to remove an image from the gallery based on its id
  removeImage(id) {
    this.images = this.images.filter((image) => image.id !== id);
  }

  // Method to display images in a grid layout on the current page
  displayImages() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const currentPageImages = this.images.slice(startIndex, endIndex);

    currentPageImages.forEach((image) => {
      console.log(`Title: ${image.title}`);
      console.log(`Description: ${image.description}`);
      console.log(image.imageUrl);
      console.log("-----------------------------------");
    });
  }

  // Method to search for images with a given keyword
  searchImages(keyword) {
    const filteredImages = this.images.filter((image) => {
      return (
        image.title.toLowerCase().includes(keyword.toLowerCase()) ||
        image.description.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    return filteredImages;
  }

  // Method to sort images based on given criteria (title, description, or id)
  sortImages(criteria) {
    const sortingMethods = {
      title: (a, b) => a.title.localeCompare(b.title),
      description: (a, b) => a.description.localeCompare(b.description),
      id: (a, b) => a.id - b.id,
    };

    this.images.sort(sortingMethods[criteria]);
  }

  // Method to navigate to a specific page
  goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(this.images.length / this.pageSize)) {
      this.currentPage = pageNumber;
      this.displayImages();
    } else {
      console.log("Invalid page number!");
    }
  }

  // Method to upload a new image to the gallery
  uploadImage(title, description, imageUrl) {
    const id = this.images.length + 1;
    const image = new Image(id, title, description, imageUrl);
    this.addImage(image);
    console.log("Image uploaded successfully!");
  }

  // Method to delete an existing image from the gallery based on its id
  deleteImage(id) {
    this.removeImage(id);
    console.log("Image deleted successfully!");
  }
}

// Usage:

const gallery = new Gallery();

// Adding images
gallery.uploadImage("Sunset", "Beautiful sunset over the sea.", "sunset.jpg");
gallery.uploadImage("Mountain", "Snow-covered mountain peaks.", "mountain.jpg");
// Add more images...

// Displaying images
gallery.displayImages();

// Searching for images
const searchResults = gallery.searchImages("sun");
console.log("Search Results:", searchResults);

// Sorting images
gallery.sortImages("title");
console.log("Sorted by title:");
gallery.displayImages();

// Pagination
gallery.goToPage(2); // Go to page 2
gallery.goToPage(3); // Go to page 3

// Deleting an image
gallery.deleteImage(2); // Delete image with id 2

// Displaying images after deletion
gallery.displayImages();

// Add more functionalities and customize the code as per your requirements.