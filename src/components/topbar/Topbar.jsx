import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './topbar.scss'

const Topbar = () => {

    const NAVDATA=[
        {
            path:'/',
            display:'HOME'
        },
        {
            path:'/about',
            display:'ABOUT'
        },
        {
            path:'/service',
            display:'SERVICE'
        },
        {
            path:'/contact',
            display:'CONTACT'
        },
    ]

    const [offset, setOffset] = useState(0);

    useEffect(()=>{
        const onScroll=()=>setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
    },[])

    console.log(offset);
    
    return (
        <div className={offset ? 'top top_border' : 'top'}>
            <div className="left">
                l
            </div>
            <div className="center">
                
               <ul>
                {
                    NAVDATA.map((nav,index)=><li><NavLink to={nav.path} className='topListItem' key={index} end>{nav.display}</NavLink></li>)
                }
               </ul>

            </div>
            <div className="right">
                r
            </div>
        </div>
    );
};

export default Topbar;