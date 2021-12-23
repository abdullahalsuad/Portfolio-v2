import "./productList.css";
import Product from "../productCard/ProductCard";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's </h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora possimus deleniti odio, laudantium voluptatem laboriosam quas ea doloribus aliquid unde. Laboriosam cupiditate quod sit dignissimos quam unde eveniet earum fuga.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;