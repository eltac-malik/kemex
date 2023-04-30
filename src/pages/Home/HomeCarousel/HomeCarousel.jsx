import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import HomeProduct from "./HomeProduct.jsx";
import { products } from "shared/mock";

function HomeCarousel() {
  const scrollLeft = () => {
    const content = document.getElementById("content");
    if (content) {
      content.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    const content = document.getElementById("content");
    if (content) {
      content.scrollLeft += 400;
    }
  };

  return (
    <section className="mr-100 w-[100%] flex justify-center items-center">
      <div className="relative w-[80%]">
        <div className="text-center py-4 text-3xl font-bold">Products</div>
        <div className="absolute top-5 right-0">
          <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <FiChevronLeft />
          </button>
          <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
            <FiChevronRight />
          </button>
        </div>
        <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-hidden scroll-smooth scrollbar-hide">
          {products.map((product) => {
            return (
              <HomeProduct
                key={product.id}
                title={product.name}
                image={product.image}
                form={product.form}
                application={product.application}
                specification={product.specification}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeCarousel;

