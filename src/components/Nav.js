import React, {useState, useEffect} from 'react'

const Nav = () => {
const [scrolled,setScrolled]= useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
    return (
        <header className={x.join(" ")}>
            <div className = "navbar" >
                <div className="rightside">
                    <h2>SHOSTO</h2>
                </div>
                <div className="leftside">
                    <ul>
                        <li><a href="#Home">HOME</a></li>
                        <li><a href="#About">ABOUT</a></li>
                        <li><a href="#Store">STORE</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Nav
