import React,{useEffect, useState} from 'react';

import { IMAGE } from "assets/img";
import { mainTitles } from "shared/constant";

import style from "./Home.module.css";
import {AiOutlineArrowRight} from "react-icons/ai"

const SecondSectionPart = ({ title, image }) => {
  return (
    <div className={style.ss_parts}>
      <img src={image} alt="" />
      <div className={style.ss_textarea}>
        <div className={style.line}></div>
        <h1>{title.t1}</h1>
        <span className={style.ss_readmore}>
          Read more <div className={style.ss_more}><AiOutlineArrowRight size={20} /></div>
        </span>
      </div>
    </div>
  );
};

export const Home = () => {
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            count === mainTitles.length-1 ?
            setCount(0) : setCount(count + 1)
        },5000)
    },[count])

<<<<<<< HEAD
	return (
		<div className={style.home}>
			<div className={style.first_section}>
				<div className={style.data} data-aos="fade-up">
					<h1>{mainTitles[count].t1}</h1>
					<h2>{mainTitles[count].t2}</h2>
				</div>
				<p className={style.employeers} data-aos="zoom-in-down"><img src={IMAGE.EMPLOYEERS} alt=""/></p>
			</div>
		</div>
	);
};
=======
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count + 1) % mainTitles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.home}>
      <div className={style.first_section}>
        <div className={style.data} data-aos="fade-up">
          <h1>{mainTitles[count].t1}</h1>
          <h2>{mainTitles[count].t2}</h2>
        </div>
        <p className={style.employeers} data-aos="zoom-in-down">
          <img src={IMAGE.EMPLOYEERS} alt="" />
        </p>
      </div>
      <div className={style.second_section}>
        <SecondSectionPart title={mainTitles[count]} image={IMAGE.NOBIAN} />
        <SecondSectionPart title={mainTitles[(count + 1) % mainTitles.length]} image={IMAGE.NOBIAN} />
        <SecondSectionPart title={mainTitles[(count + 2) % mainTitles.length]} image={IMAGE.NOBIAN} />
      </div>
    </div>
  );
};
>>>>>>> a2eebae44f8e0685b0d2d71e97b99cc318ba1ec6
