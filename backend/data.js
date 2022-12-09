import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Fatih",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Ali",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Harley Benton Custom Line Nashville Nylon",
      slug: "harley-guitar",
      category: "Bass Guitars",
      image: "/images/p1.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "Harley Benton",
      rating: 4.5,
      numReviews: 10,
      description: "Solid Body Acoustic Guitar with Pickup",
    },
    {
      // _id: '2',
      name: "Marcus Miller M7 Swamp Ash 5st TBK 2nd Gen",
      slug: "marcus-miller",
      category: "Bass Guitars",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 0,
      brand: "Marcus Miller",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '3',
      name: "Takamine GD51CE-NAT LH nat LH",
      slug: "takamine-acoustic",
      category: "Acoustic ",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Takamine",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Godin Grand Concert SA Konzertgitarre",
      slug: "godin-grand",
      category: "Konzertgitarre",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Godin",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
