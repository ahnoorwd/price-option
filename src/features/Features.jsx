import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const Features = ({feature}) => {
    return (
        <div className="">
            <p className="text-gray-300 font-bold items-center flex gap-2 justify-center"> <IoCheckmarkCircleOutline className="text-white"></IoCheckmarkCircleOutline> {feature}</p>
        </div>
    );
};
Features.propTypes ={
    feature:PropTypes.string 
}
export default Features;