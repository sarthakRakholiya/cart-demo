// ***** start - imports from package *****
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { Button, Col, Container, Row } from "reactstrap";
// ***** end - imports from package *****

// ***** start - imports from files *****
import { COLOR_ARRAY } from "@/constants/appConstants";
import {
  addNewItemInCart,
  incrementItemQuantity,
} from "@/redux/reducers/cartReducer";
import { findElementWithIdAndColor } from "@/utils/utils";
import CustomSVG from "./Common/CustomSVG";
// ***** end - imports from files *****

const MainSection = ({ product }) => {
  // ***** start - define variables *****
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const [showNext, setShowNext] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedColor, setSelectedColor] = useState(COLOR_ARRAY[0]);
  // ***** end - define variables *****

  // ***** start - select another color *****
  const onChangeOfColor = (data) => {
    setSelectedColor(() => data);
  };
  // ***** end - select another color *****

  // ***** start - Add product to cart if item already exists then increase it's quantity *****
  const onClickOnAddToCart = (item) => {
    console.log("cartData: ", cartData);
    console.log("item.id: ", item.id);
    console.log("selectedColor.id: ", selectedColor.id);
    // check if product with same color is exits or not
    if (findElementWithIdAndColor(cartData, item.id, selectedColor.id)) {
      const index = cartData.findIndex(
        (ele) => ele.id === item.id && ele.color.id === selectedColor.id
      );
      dispatch(incrementItemQuantity(index));
    } else {
      const requestData = {
        ...item,
        color: selectedColor,
        quantity: 1,
      };
      dispatch(addNewItemInCart(requestData));
    }
  };
  // ***** end - Add product to cart if item already exists then increase it's quantity *****

  // ***** start - Make crousel scroll every 5 seconds *****
  useEffect(() => {
    if (emblaApi) {
      const timer = setTimeout(() => {
        emblaApi.scrollNext();
        setShowNext((pre) => pre + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [emblaApi, showNext]);
  // ***** end - Make crousel scroll every 5 seconds *****

  return (
    <section className="main-section">
      {product && (
        <Container>
          <Row>
            <Col md="6">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <Image
                      src={product.image}
                      alt={product.name || "-"}
                      className="product-image"
                      width={535}
                      height={535}
                    />
                  </div>
                  <div className="embla__slide">
                    <Image
                      src={product.image}
                      alt={product.name || "-"}
                      className="product-image"
                      width={535}
                      height={535}
                    />
                  </div>
                  <div className="embla__slide">
                    <Image
                      src={product.image}
                      alt={product.name || "-"}
                      className="product-image"
                      width={535}
                      height={535}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="product-details-section">
                <div className="product-title">{product.name || "-"}</div>
                <div className="product-rating-container">
                  <Rating initialValue={`${product.averageRating}`} size={22} />
                  <div className="product-rating-count">
                    {product.reviews.length || "0"}
                  </div>
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-color-container">
                  <div className="product-color-heading">Color</div>
                  <div className="colors-inner-container">
                    {COLOR_ARRAY.map((ele) => {
                      return (
                        <div
                          className="selected-product"
                          onClick={() => onChangeOfColor(ele)}
                          style={{
                            border:
                              ele.id === selectedColor.id &&
                              `2px solid ${ele.colorCode}`,
                            borderWidth: ele.id === selectedColor.id ? 2 : 0,
                            borderColor:
                              ele.id === selectedColor.id
                                ? ele.colorCode
                                : "#ffffff",
                          }}
                          key={`${ele.id}-${ele.label}`}
                        >
                          <div
                            style={{ backgroundColor: ele.colorCode }}
                            className="product-color"
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="product-button-container">
                  <Row>
                    <Col md="9">
                      <Button
                        onClick={() => onClickOnAddToCart(product)}
                        className="add-to-cart-btn"
                      >
                        Add To Cart
                      </Button>
                    </Col>
                    <Col md="3">
                      <Button className="like-btn">
                        <CustomSVG icon="icon-heart" />
                      </Button>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Button className="buy-now-btn">Buy Now</Button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="product-description-container">
            <div className="product-description-heading">Description</div>
            <div className="product-description">
              {product.description || "-"}
            </div>
          </div>
        </Container>
      )}
    </section>
  );
};

export default MainSection;
