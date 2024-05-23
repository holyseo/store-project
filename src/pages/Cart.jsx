import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ user, cartItems, setCartItems }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-cont">
      <div className="cart-wrapper">
        {cartItems.cartItems.length > 0 ? (
          cartItems.cartItems.map((item) => {
            return (
              <div className="cart-list-cont" key={item.id}>
                <img
                  src={item.img}
                  alt={item.productName}
                  className="cart-img"
                />
                <div id="cart-text">
                  <button className="free-shipping">Free Shipping</button>
                  <h2 className="cart-item-h2">{item.productName}</h2>
                  <h3 className="cart-item-h3">
                    ${(item.price * 1.2).toFixed(2)}
                  </h3>
                  <h1 className="cart-item-h1">${item.price.toFixed(2)}</h1>
                  <h4 className="cart-item-h4">
                    {item.description.length > 200
                      ? `${item.description.substring(0, 200)}...`
                      : item.description}
                  </h4>
                  <button
                    onClick={() => {
                      console.log(item.id);
                      setCartItems((init) => {
                        const itemToRemove = init.cartItems.find(
                          (cartItem) => cartItem.id === item.id
                        );
                        return (
                          itemToRemove && {
                            totalAmount: init.totalAmount - itemToRemove.price,
                            numberOfItems: init.numberOfItems - 1,
                            cartItems: init.cartItems.filter((i) => {
                              return i.id !== itemToRemove.id;
                            }),
                          }
                        );
                      });
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
      {cartItems.cartItems.length > 0 && (
        <div className="cart-summary-cont">
          <h2>Total: ${cartItems.totalAmount.toFixed(2)}</h2>
          <h5>Shipping Cost: $0</h5>
          <h5>Total Items: {cartItems.numberOfItems}</h5>
          <button
            style={{ alignSelf: "center", width: "100%" }}
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
