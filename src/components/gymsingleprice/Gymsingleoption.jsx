
import PropTypes from "prop-types";
import Features from "../../features/Features";
const Gymsingleoption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className="bg-blue-500 rounded-md p-4 text-center my-4 text-white w-full flex flex-col h-[350px]">
        
           <h2>
            
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-2xl">/monthly</span>
           </h2>
           <h4 className=" font-extrabold  text-xl p-2 rounded-xl my-1">{name}</h4>

          <div className="flex-grow">
          {
            features.map((feature,idx)=><Features key={idx} feature={feature} ></Features>)
           }
          </div>
          <div>
            <button className="btn w-full bg-green-400 text-white hover:bg-gray-600">Buy Now </button>
          </div>
           
        </div>
    );
};
Gymsingleoption.propTypes ={
    option:PropTypes.object 
}
export default Gymsingleoption;