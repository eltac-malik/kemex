import purisafWater from "assets/img/neutra-sul-professional-grade-oxidizer_1024x1024.jpg";

function HomeProduct({ title, image, form, application, specification }) {
    return (
      <>
        <div className="card w-[400px] h-[370px] m-2 rounded-lg flex justify-center items-center ">
          <div className="top">
            <img
              className="w-[200px] h-[200px] object-cover p-2"
              src={purisafWater}
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3">
            <div className="title font-semibold text-xs my-1">
            {title}
            </div>
            <div className="category text-xs font-light my-1">
            Form : {form}
            </div>
  

          </div>
        </div>
      </>
    );
  }
  
  export default HomeProduct;
  
