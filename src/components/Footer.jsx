import { list } from 'postcss'
import React from 'react'
import githubIcon from "../assets/github.png"


const Footer = ({ footerAPI: { titles, links } }) => {
    return (
        <footer className='bg-theme pt-7 pb-5'>
            <div className='nike-container text-slate-200 '>
                <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
                    {titles.map((val, i) => (
                        <div key={i} className="grid items-center ">
                            <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
                        </div>
                    ))}
                    {links.map((list, i) => (
                        <ul className='grid items-center gap-1 ' key={i}>
                            {list.map((link, i) => (
                                <li className='text-sm sm:text-xs' key={i}>{link.link}</li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className='mt-5 text-center'>
                    <p className='inline cursor-pointer hover:scale-105 transition ease-in-out'><a href="#">Andrei Khrustikov. </a></p>
                    <p className='font-bold hover:scale-105 text-slate-900 inline'>See this page on <a className='hover:scale-105' href="https://github.com/AndrewHelegson/sneackers-shop-redux-tailwind.git"><img className='w-5 h-5 inline' src={githubIcon} /> github</a></p>
                    {/* <p className='text-sm md:text-center font-bold hover:scale-105'> <a href="#">Andrei Khrustikov.</a> See this page on <a className='text-xl text-slate-900 font-bold cursor-pointer' href="#"><img
                        className='w-5 h-5 inline' src='https://cdn-icons-png.flaticon.com/512/3291/3291695.png'></img>Github</a></p> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer
