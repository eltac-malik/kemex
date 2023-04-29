import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
export const Phone = (props) => <AiOutlinePhone {...props} />;

export const Close = (props) => <AiOutlineClose {...props} className={`cursor-pointer hover:text-red-600 hover:animate-pulse pt-2 decoration-gray-700 transition duration-300`}/>
