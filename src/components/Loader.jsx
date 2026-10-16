import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    let interval;

    interval = setInterval(() => {
      value = Math.min(value + Math.floor(Math.random() * 8) + 3, 100);

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
      }
    }, 180);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className="loader-screen">
      {/* ANIMATED BACKGROUND */}
      <div className="loader-background">
        <div className="loader-orb loader-orb-one" />
        <div className="loader-orb loader-orb-two" />
        <div className="loader-grid" />
      </div>

      {/* BRAND */}
      <div className="loader-brand">
        <span className="brand-symbol">
          <i className="bi bi-lightning-charge-fill" />
        </span>

        <span>ÉLITE</span>
        <span className="brand-divider">/</span>
        <span className="brand-subtitle">SNEAKERS</span>
      </div>

      {/* SHOE SHOWCASE */}
      <div className="loader-showcase">
        <div className="loader-ring loader-ring-one" />
        <div className="loader-ring loader-ring-two" />
        <div className="loader-ring loader-ring-three" />

        <div className="loader-particle particle-one" />
        <div className="loader-particle particle-two" />
        <div className="loader-particle particle-three" />
        <div className="loader-particle particle-four" />

        <div className="loader-shoe">
          <img
            src={`${BASE_URL}images/shoe-loading.png`}
            alt="Élite sneaker"
            className="loader-shoe-image"
            onError={(event) => {
              event.currentTarget.style.visibility = "hidden";
            }}
          />

          <div className="shoe-glow" />
        </div>

        <div className="loader-shadow" />
      </div>

      {/* LOADER CONTENT */}
      <div className="loader-content">
        <p className="loader-eyebrow">
          THE FUTURE OF FOOTWEAR
        </p>

        <h1>
          STEP INTO
          <span> GREATNESS.</span>
        </h1>

        <p className="loader-description">
          Crafting your next extraordinary experience.
        </p>

        {/* PROGRESS BAR */}
        <div
          className="loader-progress"
          role="progressbar"
          aria-label="Loading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="progress-information">
            <span>
              {progress >= 100
                ? "EXPERIENCE READY"
                : "INITIALIZING EXPERIENCE"}
            </span>

            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="loader-bottom">
        <span>DESIGNED FOR MOVEMENT</span>
        <span>EST. 2026</span>
      </div>
    </div>
  );
};

export default Loader;