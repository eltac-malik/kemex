import PropTypes from 'prop-types';
import purisafWater from "assets/img/neutra-sul-professional-grade-oxidizer_1024x1024.jpg";

function HomeProduct(props) {
    const {name,form,specification} = props;

    return (
      <>
        <div className="card w-[300px] h-[370px] m-2 rounded-lg flex justify-center items-center ">
          <div className="top">
            <img
              className="w-[200px] h-[200px] object-cover p-2"
              src={purisafWater}
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-center p-3">
            <div className="title font-semibold text-xs my-1">
            {name}
            </div>
            <div className="category text-xs font-light my-1">
            Form : {form}
            </div>
            <div className="category text-xs font-light my-1">
            Form : {specification}
            </div>
          </div>
        </div>
      </>
    );
  }

  HomeProduct.propTypes = {
    name: PropTypes.string,
    form: PropTypes.string,
    specification: PropTypes.object,
  };
  
  export default HomeProduct;