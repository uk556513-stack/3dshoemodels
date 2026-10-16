import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Gem,
  Heart,
  Layers3,
  MoveUpRight,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    number: "01",
    title: "QUALITY FIRST",
    description:
      "We focus on carefully curated footwear styles with attention to design, finishing, and everyday versatility.",
  },
  {
    icon: Compass,
    number: "02",
    title: "OWN YOUR DIRECTION",
    description:
      "Personal style has no single formula. Discover sneakers that help you express your own direction.",
  },
  {
    icon: Heart,
    number: "03",
    title: "MADE FOR MOVEMENT",
    description:
      "From everyday outings to casual weekends, our collection is selected with modern lifestyles in mind.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "DETAILS MATTER",
    description:
      "Silhouette, colour, material, and small finishing details all contribute to a distinctive look.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* ABOUT HERO */}

      <section className="about-hero">
        <div className="about-hero-background" />

        <div className="container">
          <div className="breadcrumb-elite">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span>OUR STORY</span>
          </div>

          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="section-kicker">
              OUR PHILOSOPHY
            </span>

            <h1>
              BUILT FOR
              <br />
              <span>YOUR NEXT MOVE.</span>
            </h1>

            <p>
              We believe sneakers are more than footwear.
              They are a statement of identity, a reflection
              of creativity, and a companion for every journey.
            </p>

            <Link to="/shop" className="btn-elite-primary explore-btn">
  EXPLORE THE COLLECTION
  <ArrowRight size={18} />
</Link>
          </motion.div>

          <div className="about-hero-bottom">
            <span>DESIGN WITH PURPOSE</span>
            <span>STYLE WITHOUT LIMITS</span>
            <span>ÉLITE SNEAKERS / 2026</span>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}

      <section className="about-story-section section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-story-image">
                <img
                src={`${import.meta.env.BASE_URL}images/about-banner.jpg`}
                alt="Élite Sneakers design philosophy"
                loading="lazy"
                onError={(e) => {
                console.error("About image failed:", e.currentTarget.src);
              }}
              />

                <div className="about-story-image-label">
                  <Sparkles size={20} />

                  <div>
                    <span>OUR APPROACH</span>
                    <strong>MOVE DIFFERENT.</strong>
                  </div>
                </div>

                <div className="about-story-image-number">
                  01
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-kicker">
                THE STORY BEHIND THE STYLE
              </span>

              <h2 className="section-title">
                A DIFFERENT
                <br />
                <span>WAY TO MOVE.</span>
              </h2>

              <p className="about-story-lead">
                Élite Sneakers is built around one simple idea:
                your footwear should reflect who you are.
              </p>

              <p className="about-story-description">
                Our concept brings together contemporary sneaker
                culture, expressive design, and a curated shopping
                experience. We want browsing for your next pair
                to feel exciting, clear, and effortless.
              </p>

              <p className="about-story-description">
                Whether you prefer minimal everyday silhouettes,
                bold statement sneakers, or sporty looks, the
                collection is designed to give you different
                ways to express your personal style.
              </p>

              <div className="about-story-points">
                <div>
                  <Check size={17} />
                  Carefully curated styles
                </div>

                <div>
                  <Check size={17} />
                  Clear product and size selection
                </div>

                <div>
                  <Check size={17} />
                  A modern shopping experience
                </div>
              </div>

              <Link to="/shop" className="section-link">
                DISCOVER THE COLLECTION
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRAND PRINCIPLES */}

      <section className="about-principles-section section-padding">
        <div className="container">
          <div className="section-heading-centered">
            <span className="section-kicker">
              WHAT DEFINES US
            </span>

            <h2 className="section-title">
              OUR CORE <span>VALUES.</span>
            </h2>

            <p className="section-description">
              The principles behind our approach to sneaker
              style and the shopping experience.
            </p>
          </div>

          <div className="row g-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  className="col-md-6 col-lg-3"
                  key={value.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                >
                  <article className="about-value-card">
                    <div className="about-value-top">
                      <span>{value.number}</span>

                      <Icon size={27} />
                    </div>

                    <h3>{value.title}</h3>

                    <p>{value.description}</p>

                    <div className="about-value-bottom">
                      <span>ÉLITE PRINCIPLE</span>
                      <MoveUpRight size={17} />
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}

      <section className="about-philosophy-section">
        <div className="container">
          <div className="about-philosophy-panel">
            <div className="about-philosophy-symbol">
              <Target size={70} strokeWidth={1} />
            </div>

            <div className="about-philosophy-content">
              <span className="section-kicker">
                OUR DESIGN PHILOSOPHY
              </span>

              <h2>
                LESS ORDINARY.
                <br />
                <span>MORE YOU.</span>
              </h2>

              <p>
                We believe great style comes from the details.
                A confident silhouette, the right colour, and
                a design that feels like you can turn an everyday
                outfit into something memorable.
              </p>

              <Link to="/shop" className="btn-elite-primary">
                FIND YOUR STYLE
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="about-philosophy-watermark">
              É
            </div>
          </div>
        </div>
      </section>

      {/* BRAND NUMBERS */}

      <section className="about-numbers-section section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-lg-3">
              <div className="about-number-card">
                <span>01</span>
                <h3>STYLE</h3>
                <p>Contemporary sneaker design</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="about-number-card">
                <span>02</span>
                <h3>CHOICE</h3>
                <p>Different styles to explore</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="about-number-card">
                <span>03</span>
                <h3>DETAIL</h3>
                <p>Thoughtful product presentation</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="about-number-card">
                <span>04</span>
                <h3>EXPERIENCE</h3>
                <p>A modern shopping journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="about-final-section">
        <div className="container">
          <div className="about-final-content">
            <span className="section-kicker">
              THE NEXT STEP STARTS HERE
            </span>

            <h2>
              YOUR JOURNEY.
              <br />
              <span>YOUR SNEAKERS.</span>
            </h2>

            <p>
              Explore the collection and discover a style
              that feels like your own.
            </p>

            <Link to="/shop" className="btn-elite-primary">
              SHOP THE COLLECTION
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}