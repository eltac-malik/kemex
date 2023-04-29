import { AiOutlinePhone,AiOutlineClose } from "react-icons/ai";
import { BsArrowRight,BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';

export const Phone = (props) => <AiOutlinePhone {...props}/>;
export const ArrowRight = (props) => <BsArrowRight {...props}/>;
export const Facebook = (props) => <BsFacebook {...props}/>;
export const Instagram = (props) => <BsInstagram {...props}/>;
export const Twitter = (props) => <BsTwitter {...props}/>;
export const Phone = (props) => <AiOutlinePhone {...props} />;
export const Close = (props) => <AiOutlineClose {...props} className={`cursor-pointer hover:text-red-600 hover:animate-pulse pt-2 decoration-gray-700 transition duration-300`}/>

