import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Fatih',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ali',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        // _id: '1',
        name: 'Harley Benton Custom Line Nashville Nylon',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Solid Body Acoustic Guitar with Pickup',
      },
      {
        // _id: '2',
        name: 'Marcus Miller M7 Swamp Ash 5st TBK 2nd Gen',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 250,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        // _id: '3',
        name: 'Takamine GD51CE-NAT LH nat LH',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/p3.jpg',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        // _id: '4',
        name: 'Godin Grand Concert SA Konzertgitarre',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;