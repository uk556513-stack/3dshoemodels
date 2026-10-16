
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { products } from "../data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "elite-sneakers-cart-v1";

const productMap = new Map(
  products.map((product) => [
    String(product.id),
    product,
  ])
);

function readStoredCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item) =>
          item &&
          item.id !== undefined &&
          typeof item.size === "string" &&
          Number.isFinite(Number(item.price)) &&
          Number.isFinite(Number(item.quantity)) &&
          Number(item.quantity) > 0
      )
      .map((item) => {
        const product = productMap.get(String(item.id));

        return {
          ...item,
          name: product?.name ?? item.name ?? "Sneaker",
          image: product?.image || item.image || "",
          category: product?.category ?? item.category ?? "Lifestyle",
          price: Number(item.price),
          quantity: Math.min(
            10,
            Math.max(1, Math.floor(Number(item.quantity)))
          ),
        };
      });
  } catch (error) {
    console.error("Unable to read cart:", error);
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [cartItems]);

  const addToCart = useCallback(
    (product, size, quantity = 1) => {
      if (!product || product.id === undefined) {
        return {
          success: false,
          message: "Invalid product.",
        };
      }

      if (
        typeof size !== "string" ||
        !product.sizes?.includes(size)
      ) {
        return {
          success: false,
          message: "Please select an available shoe size.",
        };
      }

      const amount = Number(quantity);

      if (
        !Number.isInteger(amount) ||
        amount < 1 ||
        amount > 10
      ) {
        return {
          success: false,
          message: "Choose a quantity between 1 and 10.",
        };
      }

      const price = Number(
        product.sizePrices?.[size] ?? product.price
      );

      if (!Number.isFinite(price) || price < 0) {
        return {
          success: false,
          message: "Product price is unavailable.",
        };
      }

      setCartItems((previous) => {
        const existing = previous.find(
          (item) =>
            String(item.id) === String(product.id) &&
            item.size === size
        );

        if (existing) {
          return previous.map((item) => {
            if (
              String(item.id) === String(product.id) &&
              item.size === size
            ) {
              return {
                ...item,
                name: product.name,
                image: product.image || item.image || "",
                category: product.category || item.category || "",
                price,
                quantity: Math.min(
                  10,
                  item.quantity + amount
                ),
              };
            }

            return item;
          });
        }

        return [
          ...previous,
          {
            id: product.id,
            name: product.name,
            image: product.image || "",
            category: product.category || "",
            size,
            price,
            quantity: amount,
          },
        ];
      });

      return {
        success: true,
        message: `${product.name} added to your cart.`,
      };
    },
    []
  );

  const removeFromCart = useCallback((id, size) => {
    setCartItems((previous) =>
      previous.filter(
        (item) =>
          !(
            String(item.id) === String(id) &&
            item.size === size
          )
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (id, size, quantity) => {
      const amount = Number(quantity);

      if (
        !Number.isInteger(amount) ||
        amount < 1 ||
        amount > 10
      ) {
        return;
      }

      setCartItems((previous) =>
        previous.map((item) =>
          String(item.id) === String(id) &&
          item.size === size
            ? {
                ...item,
                quantity: amount,
              }
            : item
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider."
    );
  }

  return context;
}
