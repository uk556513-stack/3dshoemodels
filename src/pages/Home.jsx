
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Truck,
  RefreshCw,
  Sparkles,
  MoveRight,
  Zap,
  Star,
  ShoppingBag,
} from "lucide-react";

import ShoeModel from "../components/ShoeModel";
import ProductCarousel from "../components/ProductCarousel";
import Accordion from "../components/Accordion";

import {
  getFeaturedProducts,
  products,
} from "../data/products";

const BASE_URL = import.meta.env.BASE_URL;

// For images stored in the public/images folder
const getAssetUrl = (path) => {
  if (!path) return "";

  if (/^(https?:\/\/|data:|blob:)/i.test(path)) {
    return path;
  }

  const cleanPath = String(path).replace(/^\/+/, "");

  // Prevent adding the Vite base path twice
  if (cleanPath.startsWith(BASE_URL.replace(/^\/+/, ""))) {
    return `/${cleanPath}`;
  }

  return `${BASE_URL}${cleanPath}`;
};

const categories = [
  {
    id: "men",
    title: "MEN'S COLLECTION",
    subtitle: "Built for every move",
    image: getAssetUrl("images/men-collection.jpg"),
    link: "/shop?category=Running",
    number: "01",
  },
  {
    id: "women",
    title: "WOMEN'S COLLECTION",
    subtitle: "Confidence in every step",
    image: getAssetUrl("images/women-collection.jpg"),
    link: "/shop?category=Lifestyle",
    number: "02",
  },
  {
    id: "sport",
    title: "SPORT COLLECTION",
    subtitle: "Performance meets style",
    image: getAssetUrl("images/sport-collection.jpg"),
    link: "/shop?category=Training",
    number: "03",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Carefully selected materials, excellent finishing, and comfort designed for everyday use.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "A smooth shopping experience with convenient delivery options for your order.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "Shop with confidence. Review the return policy before placing your order.",
  },
  {
    icon: Check,
    title: "Authentic Style",
    description:
      "Discover carefully curated sneakers for casual, sporty, and streetwear looks.",
  },
];

const stats = [
  { number: "26", label: "Sneaker Styles" },
  { number: "03", label: "Product Categories" },
  { number: "100%", label: "Style Focused" },
  { number: "24/7", label: "Online Shopping" },
];

const faqItems = [
  {
    question: "How do I choose my sneaker size?",
    answer:
      "Open a product page and check the available UK sizes. Choose the size that matches your usual footwear fit. If you are between sizes, review the sizing guidance before ordering.",
  },
  {
    question: "Can I browse different collections?",
    answer:
      "Yes. Visit the Shop page to browse available sneaker styles. You can search by product name and use the category filters.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Visit our Contact page for the available contact options. Update the contact details with your real business phone number and email before publishing.",
  },
  {
    question: "Can I add multiple products to my cart?",
    answer:
      "Select a product size and quantity on the product details page, then add the item to your cart.",
  },
];

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const popularProducts = products.slice(0, 4);

  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid-pattern" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container">
          <div className="row align-items-center hero-row">
            <motion.div
              className="col-lg-6 hero-content"
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-icon">
                  <Sparkles size={15} />
                </span>

                <span>THE FUTURE OF FOOTWEAR</span>
                <span className="hero-eyebrow-line" />
              </div>

              <h1 className="hero-title">
                WALK
                <br />
                BEYOND
                <br />
                <span>LIMITS.</span>
              </h1>

              <p className="hero-description">
                Discover a new dimension of sneaker culture.
                Premium design, futuristic silhouettes, and
                everyday comfort — created for those who never
                follow the crowd.
              </p>

              <div className="hero-buttons">
                <Link to="/shop" className="btn-elite-primary">
                  EXPLORE COLLECTION
                  <ArrowRight size={18} />
                </Link>

                <Link to="/about" className="btn-elite-secondary">
                  OUR STORY
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="hero-trust-row">
                <div className="hero-rating">
                  <div className="hero-stars">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={13}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span>Designed for sneaker lovers</span>
                </div>

                <div className="hero-trust-divider" />

                <div className="hero-trust-label">
                  <ShieldCheck size={17} />
                  PREMIUM STYLE
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 hero-visual"
              initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <div className="hero-visual-label hero-label-top">
                <span className="status-dot" />
                NEXT-GEN DESIGN
              </div>

              <div className="hero-model-container">
                <div className="hero-orbit hero-orbit-one" />
                <div className="hero-orbit hero-orbit-two" />
                <div className="hero-model-glow" />

                <ShoeModel
                  modelPath={getAssetUrl("models/sneaker.glb")}
                  className="hero-three-model"
                  autoRotate={true}
                  enableControls={true}
                />

                <div className="hero-model-badge">
                  <span className="hero-badge-small">
                    THE COLLECTION
                  </span>
                  <strong>01 / ELITE</strong>
                </div>
              </div>

              <div className="hero-visual-label hero-label-bottom">
                <span>ROTATE</span>
                <span className="hero-label-divider" />
                <span>EXPLORE</span>
              </div>

              <div className="hero-side-number">01</div>
            </motion.div>
          </div>

          <div className="hero-bottom-bar">
            <div className="hero-bottom-left">
              <span className="hero-bottom-dot" />
              PREMIUM SNEAKER EXPERIENCE
            </div>

            <a href="#featured" className="hero-scroll-link">
              SCROLL TO EXPLORE
              <ArrowDown size={16} />
            </a>

            <span className="hero-bottom-right">EST. 2026</span>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-0">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className="col-6 col-lg-3"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div className="stat-card">
                  <h2>{item.number}</h2>
                  <p>{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="featured-section section-padding"
        id="featured"
      >
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">
                <Zap size={15} />
                HANDPICKED FOR YOU
              </span>

              <h2 className="section-title">
                THE <span>ELITE</span> EDIT.
              </h2>

              <p className="section-description">
                Fresh silhouettes. Bold details. Iconic energy.
                Find the pair that matches your personality.
              </p>
            </div>

            <Link to="/shop" className="section-link">
              VIEW ALL PRODUCTS
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <ProductCarousel
            products={featuredProducts}
            title="Featured Sneakers"
            subtitle="Discover our latest sneaker collection"
          />
        </div>
      </section>

      {/* COLLECTION CATEGORIES */}
      <section className="category-section section-padding">
        <div className="container">
          <div className="section-heading-centered">
            <span className="section-kicker">
              EXPLORE YOUR STYLE
            </span>

            <h2 className="section-title">
              FIND YOUR <span>PACE.</span>
            </h2>

            <p className="section-description">
              Every step tells a story. Choose the collection
              that speaks your language.
            </p>
          </div>

          <div className="row g-4 category-grid">
            {categories.map((category, index) => (
              <motion.div
                className="col-md-6 col-lg-4"
                key={category.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >
                <Link
                  to={category.link}
                  className={`category-card category-${category.id}`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(8,8,8,0.05), rgba(8,8,8,0.88)), url("${category.image}")`,
                  }}
                >
                  <span className="category-number">
                    {category.number}
                  </span>

                  <div className="category-card-content">
                    <span className="category-subtitle">
                      {category.subtitle}
                    </span>

                    <h3>{category.title}</h3>

                    <span className="category-arrow">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND EXPERIENCE */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-panel">
            <div className="experience-background-circle" />

            <div className="row align-items-center">
              <motion.div
                className="col-lg-6 experience-content"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-kicker">
                  <Sparkles size={15} />
                  DESIGNED TO STAND OUT
                </span>

                <h2 className="experience-title">
                  NOT JUST
                  <br />
                  A SNEAKER.
                  <br />
                  <span>AN ATTITUDE.</span>
                </h2>

                <p>
                  Your style should never stand still. Our
                  collection brings together contemporary
                  silhouettes, expressive details, and versatile
                  designs that move with your lifestyle.
                </p>

                <div className="experience-check-list">
                  <div>
                    <Check size={17} />
                    Contemporary silhouettes
                  </div>

                  <div>
                    <Check size={17} />
                    Everyday styling versatility
                  </div>

                  <div>
                    <Check size={17} />
                    Comfort-focused design
                  </div>
                </div>

                <Link
                  to="/about"
                  className="btn-elite-primary experience-button"
                >
                  DISCOVER OUR STORY
                  <MoveRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                className="col-lg-6 experience-visual"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <div className="experience-image-frame">
                  <img
                    src={getAssetUrl("images/hero-banner.jpg")}
                    alt="Élite Sneakers premium collection"
                    loading="lazy"
                    onError={(event) => {
                      console.error(
                        "Hero banner image failed:",
                        event.currentTarget.src
                      );
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="experience-image-overlay" />

                  <div className="experience-image-label">
                    <span>DESIGN PHILOSOPHY</span>
                    <strong>MOVE DIFFERENT.</strong>
                  </div>
                </div>

                <div className="experience-floating-card">
                  <Sparkles size={20} />

                  <div>
                    <strong>ELITE ENERGY</strong>
                    <span>Made for your next move</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="benefits-section section-padding">
        <div className="container">
          <div className="section-heading-centered">
            <span className="section-kicker">
              THE ELITE DIFFERENCE
            </span>

            <h2 className="section-title">
              MORE THAN <span>STYLE.</span>
            </h2>

            <p className="section-description">
              A thoughtful shopping experience from discovery
              to delivery.
            </p>
          </div>

          <div className="row g-4 benefits-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="col-sm-6 col-lg-3"
                  key={feature.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                >
                  <article className="benefit-card">
                    <div className="benefit-icon">
                      <Icon size={25} />
                    </div>

                    <span className="benefit-number">
                      0{index + 1}
                    </span>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="home-offer-section">
        <div className="container">
          <div className="home-offer-banner">
            <div className="offer-banner-glow" />

            <div className="offer-banner-content">
              <span className="offer-banner-kicker">
                YOUR NEXT FAVORITE PAIR AWAITS
              </span>

              <h2>
                STEP INTO
                <br />
                SOMETHING <span>NEW.</span>
              </h2>

              <p>
                Explore the collection and discover your next
                everyday essential.
              </p>

              <Link to="/offers" className="btn-elite-dark">
                EXPLORE OFFERS
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="offer-banner-symbol">
              <Zap size={100} strokeWidth={0.8} />
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="popular-section section-padding">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">
                THE SNEAKER WALL
              </span>

              <h2 className="section-title">
                MORE TO <span>EXPLORE.</span>
              </h2>

              <p className="section-description">
                Find your new favourite from our growing range
                of sneaker styles.
              </p>
            </div>

            <Link to="/shop" className="section-link">
              SHOP ALL
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="row g-4">
            {popularProducts.map((product, index) => (
              <motion.div
                className="col-6 col-lg-3"
                key={product.id ?? index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="popular-product-card">
                  <Link
                    to={`/product/${product.id}`}
                    className="popular-product-image"
                  >
                    
<img
  src={product.image}
  alt={product.name || "Sneaker"}
  loading="eager"
  onError={(event) => {
    console.error(
      "Image failed:",
      product.imageName,
      event.currentTarget.src
    );
  }}
/>


                    <span className="popular-product-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="popular-product-info">
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>

                    <div className="popular-product-bottom">
                      <strong>
                        ₹
                        {Number(product.price || 0).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                      <Link
                        to={`/product/${product.id}`}
                        aria-label={`View ${product.name}`}
                      >
                        <ShoppingBag size={17} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="home-faq-section section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="section-kicker">
                NEED TO KNOW?
              </span>

              <h2 className="section-title">
                FREQUENTLY
                <br />
                <span>ASKED.</span>
              </h2>

              <p className="section-description">
                Everything you need to know before choosing
                your next pair.
              </p>

              <Link to="/contact" className="section-link">
                STILL HAVE QUESTIONS?
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="col-lg-7">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="home-final-cta">
        <div className="container">
          <div className="home-final-cta-inner">
            <span>YOUR STYLE. YOUR RULES.</span>

            <h2>
              MAKE EVERY
              <br />
              <span>STEP COUNT.</span>
            </h2>

            <Link to="/shop" className="btn-elite-primary">
              FIND YOUR PAIR
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
