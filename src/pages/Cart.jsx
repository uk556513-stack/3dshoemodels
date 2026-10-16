
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const BASE_URL = import.meta.env.BASE_URL;

const PLACEHOLDER_IMAGE = `${BASE_URL}images/shoe-placeholder.png`;

function getImageUrl(image) {
  if (!image) return PLACEHOLDER_IMAGE;

  // External image URL or data URL
  if (/^(https?:\/\/|data:|blob:)/i.test(image)) {
    return image;
  }

  // Public asset path
  if (image.startsWith("/images/")) {
    return `${BASE_URL}${image.slice(1)}`;
  }

  // Existing Vite-imported asset URL
  // Keep its generated URL unchanged.
  return image;
}

export default function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const deliveryCharge = useMemo(() => {
    if (cartTotal <= 0 || cartTotal >= 5000) return 0;
    return 99;
  }, [cartTotal]);

  const discountAmount = Math.round(
    cartTotal * (discount / 100)
  );

  const finalTotal = Math.max(
    0,
    cartTotal + deliveryCharge - discountAmount
  );

  const handleApplyPromo = (event) => {
    event.preventDefault();

    const code = promoCode.trim().toUpperCase();

    if (!code) {
      setPromoMessage("Please enter a promo code.");
      setPromoApplied(false);
      setDiscount(0);
      return;
    }

    if (code === "ELITE10") {
      setDiscount(10);
      setPromoMessage("Promo applied successfully: 10% off.");
      setPromoApplied(true);
      return;
    }

    setDiscount(0);
    setPromoApplied(false);
    setPromoMessage("Invalid promo code. Try ELITE10.");
  };

  const handleQuantityChange = (item, newQuantity) => {
    const quantity = Math.max(
      1,
      Math.min(10, Number(newQuantity))
    );

    updateQuantity(item.id, item.size, quantity);
  };

  const handleCheckout = () => {
    if (!cartItems.length) return;

    navigate("/contact", {
      state: {
        checkout: true,
        total: finalTotal,
      },
    });
  };

  const handleImageError = (event) => {
    const image = event.currentTarget;

    console.error("Cart image failed:", image.src);

    image.onerror = null;
    image.src = PLACEHOLDER_IMAGE;
  };

  return (
    <main className="cart-page">
      <section className="cart-hero">
        <div className="container">
          <div className="breadcrumb-elite">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span>CART</span>
          </div>

          <div className="cart-hero-heading">
            <div>
              <span className="section-kicker">
                YOUR SELECTION
              </span>

              <h1>
                YOUR CART.
                <br />
                <span>YOUR NEXT MOVE.</span>
              </h1>
            </div>

            <div className="cart-hero-count">
              <ShoppingBag size={25} />
              <strong>{cartCount}</strong>
              <span>ITEMS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-content-section section-padding">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">
                <ShoppingBag size={48} />
              </div>

              <span className="section-kicker">
                NOTHING HERE YET
              </span>

              <h2>
                YOUR NEXT PAIR
                <br />
                <span>IS WAITING.</span>
              </h2>

              <p>
                Your cart is currently empty. Explore our
                collection and find a pair that matches your style.
              </p>

              <Link to="/shop" className="btn-elite-primary">
                EXPLORE SNEAKERS
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="cart-items-heading">
                  <h2>YOUR ITEMS</h2>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="cart-clear-button"
                  >
                    <Trash2 size={15} />
                    CLEAR CART
                  </button>
                </div>

                <div className="cart-items-list">
                  {cartItems.map((item) => {
                    const itemPrice = Number(item.price || 0);
                    const itemQuantity = Number(item.quantity || 1);
                    const imageUrl = getImageUrl(item.image);

                    return (
                      <article
                        className="cart-item-card"
                        key={`${item.id}-${item.size}`}
                      >
                        <Link
                          to={`/product/${item.id}`}
                          className="cart-item-image"
                        >
                          <img
                            src={imageUrl}
                            alt={item.name || "Sneaker"}
                            loading="lazy"
                            onError={handleImageError}
                          />
                        </Link>

                        <div className="cart-item-details">
                          <span className="cart-item-category">
                            {item.category || "ELITE COLLECTION"}
                          </span>

                          <Link
                            to={`/product/${item.id}`}
                            className="cart-item-name"
                          >
                            {item.name}
                          </Link>

                          <div className="cart-item-size">
                            <span>SIZE</span>
                            <strong>{item.size}</strong>
                          </div>

                          <div className="cart-item-price">
                            ₹{itemPrice.toLocaleString("en-IN")}
                          </div>

                          <div className="cart-item-controls">
                            <div className="cart-quantity-control">
                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    item,
                                    itemQuantity - 1
                                  )
                                }
                                disabled={itemQuantity <= 1}
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>

                              <span>{itemQuantity}</span>

                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    item,
                                    itemQuantity + 1
                                  )
                                }
                                disabled={itemQuantity >= 10}
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <button
                              type="button"
                              className="cart-remove-button"
                              onClick={() =>
                                removeFromCart(item.id, item.size)
                              }
                            >
                              <Trash2 size={15} />
                              REMOVE
                            </button>
                          </div>
                        </div>

                        <div className="cart-item-total">
                          <span>ITEM TOTAL</span>
                          <strong>
                            ₹{(
                              itemPrice * itemQuantity
                            ).toLocaleString("en-IN")}
                          </strong>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <Link to="/shop" className="cart-continue-link">
                  <ArrowLeft size={17} />
                  CONTINUE SHOPPING
                </Link>

                <div className="cart-security-note">
                  <ShieldCheck size={20} />
                  <div>
                    <strong>SHOP WITH CONFIDENCE</strong>
                    <p>
                      Check your selected sizes and quantities
                      before proceeding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="cart-summary-card">
                  <span className="section-kicker">
                    ORDER OVERVIEW
                  </span>

                  <h2>SUMMARY</h2>

                  <div className="cart-summary-row">
                    <span>Products ({cartCount})</span>
                    <strong>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="cart-summary-row">
                    <span>Delivery</span>
                    <strong>
                      {deliveryCharge === 0
                        ? "FREE"
                        : `₹${deliveryCharge}`}
                    </strong>
                  </div>

                  {discount > 0 && (
                    <div className="cart-summary-row cart-discount-row">
                      <span>Discount ({discount}%)</span>
                      <strong>
                        -₹{discountAmount.toLocaleString("en-IN")}
                      </strong>
                    </div>
                  )}

                  <div className="cart-delivery-message">
                    <Truck size={17} />
                    <span>
                      {cartTotal >= 5000
                        ? "You qualify for free delivery."
                        : `Add ₹${Math.max(
                            0,
                            5000 - cartTotal
                          ).toLocaleString("en-IN")} more for free delivery.`}
                    </span>
                  </div>

                  <form
                    className="cart-promo-form"
                    onSubmit={handleApplyPromo}
                  >
                    <label htmlFor="promoCode">
                      PROMO CODE
                    </label>

                    <div className="cart-promo-input">
                      <Tag size={17} />

                      <input
                        id="promoCode"
                        type="text"
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(event) =>
                          setPromoCode(event.target.value)
                        }
                      />

                      <button type="submit">APPLY</button>
                    </div>

                    {promoMessage && (
                      <p
                        className={`cart-promo-message ${
                          promoApplied
                            ? "cart-promo-success"
                            : ""
                        }`}
                      >
                        {promoApplied && (
                          <CheckCircle2 size={15} />
                        )}
                        {promoMessage}
                      </p>
                    )}
                  </form>

                  <div className="cart-summary-divider" />

                  <div className="cart-total-row">
                    <span>TOTAL</span>
                    <strong>
                      ₹{finalTotal.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <p className="cart-tax-note">
                    This is a demonstration checkout. Confirm
                    shipping and payment details before accepting
                    real customer orders.
                  </p>

                  <button
                    type="button"
                    className="btn-elite-primary cart-checkout-button"
                    onClick={handleCheckout}
                  >
                    CONTINUE TO CHECKOUT
                    <ArrowRight size={18} />
                  </button>

                  <div className="cart-payment-note">
                    <ShieldCheck size={16} />
                    SECURE SHOPPING EXPERIENCE
                  </div>
                </aside>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
