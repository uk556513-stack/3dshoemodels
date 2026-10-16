
const shoeImages = import.meta.glob(
  "../assets/shoes/*.png",
  {
    eager: true,
    import: "default",
  }
);

const imageMap = Object.fromEntries(
  Object.entries(shoeImages).map(([path, image]) => [
    path.split("/").pop().toLowerCase(),
    image,
  ])
);

const availableSizes = [
  "UK 6",
  "UK 7",
  "UK 8",
  "UK 9",
  "UK 10",
];

const makeSizePrices = (basePrice) => ({
  "UK 6": basePrice,
  "UK 7": basePrice + 100,
  "UK 8": basePrice + 200,
  "UK 9": basePrice + 300,
  "UK 10": basePrice + 400,
});

const rawProducts = [
  {
    id: 1,
    name: "Velocity X1",
    category: "Running",
    imageName: "shoe-01.png",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    badge: "BEST SELLER",
    featured: true,
    description:
      "Lightweight performance sneaker designed for everyday movement and comfortable running.",
  },
  {
    id: 2,
    name: "Urban Phantom",
    category: "Lifestyle",
    imageName: "shoe-02.png",
    price: 2799,
    originalPrice: 3599,
    rating: 4.8,
    badge: "TRENDING",
    featured: true,
    description:
      "A modern lifestyle sneaker combining bold styling with versatile everyday comfort.",
  },
  {
    id: 3,
    name: "Aero Flex Pro",
    category: "Running",
    imageName: "shoe-03.png",
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    badge: "NEW ARRIVAL",
    featured: true,
    description:
      "A sporty silhouette with a lightweight look for training and daily activity.",
  },
  {
    id: 4,
    name: "Midnight Runner",
    category: "Running",
    imageName: "shoe-04.png",
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    badge: "POPULAR",
    featured: true,
    description:
      "An all-day running-inspired sneaker with a clean, versatile design.",
  },
  {
    id: 5,
    name: "Street Rebel",
    category: "Lifestyle",
    imageName: "shoe-05.png",
    price: 2599,
    originalPrice: 3399,
    rating: 4.8,
    badge: "HOT PICK",
    featured: true,
    description:
      "Street-inspired footwear created for casual outfits and contemporary style.",
  },
  {
    id: 6,
    name: "Cloud Sprint",
    category: "Running",
    imageName: "shoe-06.png",
    price: 3199,
    originalPrice: 4199,
    rating: 4.9,
    badge: "PREMIUM",
    featured: true,
    description:
      "A performance-inspired shoe concept with a streamlined silhouette.",
  },
  {
    id: 7,
    name: "Carbon Edge",
    category: "Training",
    imageName: "shoe-07.png",
    price: 2899,
    originalPrice: 3699,
    rating: 4.6,
    badge: "LIMITED",
    featured: false,
    description:
      "Bold training-inspired footwear with an athletic profile.",
  },
  {
    id: 8,
    name: "Orange Pulse",
    category: "Lifestyle",
    imageName: "shoe-08.png",
    price: 2399,
    originalPrice: 3199,
    rating: 4.7,
    badge: "TRENDING",
    featured: false,
    description:
      "A vibrant casual sneaker for standout everyday outfits.",
  },
  {
    id: 9,
    name: "Titan Force",
    category: "Training",
    imageName: "shoe-09.png",
    price: 3499,
    originalPrice: 4499,
    rating: 4.9,
    badge: "PREMIUM",
    featured: true,
    description:
      "A structured athletic design made for a confident, sporty appearance.",
  },
  {
    id: 10,
    name: "Street Nova",
    category: "Lifestyle",
    imageName: "shoe-10.png",
    price: 2199,
    originalPrice: 2899,
    rating: 4.5,
    badge: "VALUE PICK",
    featured: false,
    description:
      "An everyday sneaker with a minimal shape and easy-to-style profile.",
  },
  {
    id: 11,
    name: "Flex Runner",
    category: "Running",
    imageName: "shoe-11.png",
    price: 2699,
    originalPrice: 3499,
    rating: 4.7,
    badge: "BEST SELLER",
    featured: false,
    description:
      "A versatile running-inspired sneaker for daily movement.",
  },
  {
    id: 12,
    name: "Shadow Drift",
    category: "Lifestyle",
    imageName: "shoe-12.png",
    price: 3099,
    originalPrice: 3999,
    rating: 4.8,
    badge: "NEW",
    featured: true,
    description:
      "Contemporary styling with a bold profile and modern streetwear appeal.",
  },
  {
    id: 13,
    name: "Blaze Motion",
    category: "Training",
    imageName: "shoe-13.png",
    price: 2899,
    originalPrice: 3799,
    rating: 4.8,
    badge: "HOT PICK",
    featured: false,
    description:
      "Sporty footwear with an energetic look for active everyday wear.",
  },
  {
    id: 14,
    name: "Silver Storm",
    category: "Lifestyle",
    imageName: "shoe-14.png",
    price: 3299,
    originalPrice: 4299,
    rating: 4.9,
    badge: "PREMIUM",
    featured: true,
    description:
      "A refined sneaker design with a futuristic visual identity.",
  },
  {
    id: 15,
    name: "Air Circuit",
    category: "Running",
    imageName: "shoe-15.png",
    price: 2799,
    originalPrice: 3599,
    rating: 4.7,
    badge: "POPULAR",
    featured: false,
    description:
      "A running-inspired silhouette for sporty, comfortable styling.",
  },
  {
    id: 16,
    name: "Phantom Street",
    category: "Lifestyle",
    imageName: "shoe-16.png",
    price: 2599,
    originalPrice: 3299,
    rating: 4.6,
    badge: "TRENDING",
    featured: false,
    description:
      "A streetwear sneaker concept with a versatile modern shape.",
  },
  {
    id: 17,
    name: "Ultra Dash",
    category: "Running",
    imageName: "shoe-17.png",
    price: 3699,
    originalPrice: 4699,
    rating: 4.9,
    badge: "PREMIUM",
    featured: true,
    description:
      "A performance-inspired design with a bold athletic appearance.",
  },
  {
    id: 18,
    name: "Neo Walker",
    category: "Lifestyle",
    imageName: "shoe-18.png",
    price: 1999,
    originalPrice: 2699,
    rating: 4.5,
    badge: "VALUE PICK",
    featured: false,
    description:
      "A simple everyday sneaker design for casual wardrobes.",
  },
  {
    id: 19,
    name: "Turbo Knit",
    category: "Running",
    imageName: "shoe-19.png",
    price: 2999,
    originalPrice: 3899,
    rating: 4.8,
    badge: "NEW ARRIVAL",
    featured: false,
    description:
      "A contemporary athletic shoe concept with a streamlined upper.",
  },
  {
    id: 20,
    name: "Night Rider",
    category: "Lifestyle",
    imageName: "shoe-20.png",
    price: 3199,
    originalPrice: 4199,
    rating: 4.8,
    badge: "LIMITED",
    featured: false,
    description:
      "A dark, bold sneaker aesthetic designed for modern streetwear.",
  },
  {
    id: 21,
    name: "Sprint Matrix",
    category: "Running",
    imageName: "shoe-21.png",
    price: 2899,
    originalPrice: 3699,
    rating: 4.7,
    badge: "POPULAR",
    featured: false,
    description:
      "A sporty sneaker concept with a dynamic, forward-looking silhouette.",
  },
  {
    id: 22,
    name: "Gravity One",
    category: "Training",
    imageName: "shoe-22.png",
    price: 3399,
    originalPrice: 4399,
    rating: 4.9,
    badge: "PREMIUM",
    featured: false,
    description:
      "A bold athletic design for training-inspired outfits.",
  },
  {
    id: 23,
    name: "Urban Legend",
    category: "Lifestyle",
    imageName: "shoe-23.png",
    price: 2499,
    originalPrice: 3199,
    rating: 4.6,
    badge: "BEST SELLER",
    featured: false,
    description:
      "A casual sneaker design with an urban-inspired profile.",
  },
  {
    id: 24,
    name: "Velocity Max",
    category: "Running",
    imageName: "shoe-24.png",
    price: 3899,
    originalPrice: 4999,
    rating: 5.0,
    badge: "TOP RATED",
    featured: true,
    description:
      "A premium running-inspired silhouette with an expressive design.",
  },
  {
    id: 25,
    name: "Fusion Flex",
    category: "Training",
    imageName: "shoe-25.png",
    price: 2799,
    originalPrice: 3599,
    rating: 4.7,
    badge: "TRENDING",
    featured: false,
    description:
      "A versatile athletic sneaker concept for active daily routines.",
  },
  {
    id: 26,
    name: "Elite Signature",
    category: "Lifestyle",
    imageName: "shoe-26.png",
    price: 4299,
    originalPrice: 5499,
    rating: 5.0,
    badge: "SIGNATURE",
    featured: true,
    description:
      "A signature collection sneaker with a premium visual identity.",
  },
];

// Match product image filenames with imported asset images

export const products = rawProducts.map((product) => {
  const imageName = String(product.imageName || "").toLowerCase();

  return {
    ...product,
    image: imageMap[imageName] || "",
    sizes: [...availableSizes],
    sizePrices: makeSizePrices(product.price),
  };
});


export const getProductById = (id) => {
  return products.find(
    (product) => String(product.id) === String(id)
  );
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category) => {
  if (!category || category === "All") {
    return products;
  }

  return products.filter(
    (product) => product.category === category
  );
};

export const searchProducts = (searchTerm = "") => {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return products;
  }

  return products.filter((product) => {
    const searchableText = [
      product.name,
      product.category,
      product.description,
      product.badge,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });
};

export default products;
