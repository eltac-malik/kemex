import React,{useEffect, useState} from 'react';

import {IMAGE} from 'assets/img'
import {mainTitles} from 'shared/constant'
import style from './Home.module.css';

export const Home = () => {
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            count === mainTitles.length-1 ?
            setCount(0) : setCount(count + 1)
        },5000)
    },[count])

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
