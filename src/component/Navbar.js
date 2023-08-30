import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const simpsonList=['homer','megi','marge','bart','lisa']
  const navigate = useNavigate()
  
  const goToLogin=()=>{
    navigate("/login")
  }

  const goToHome=()=>{
    navigate("/")
  }

  const search = (event) => {
    if(event.key === "Enter"){
      //1. 입력한 검색어를 읽어와서
      let keyword = event.target.value; //검색창에 쓰인 값을 읽어온다.
      console.log(keyword);
      //2. url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  }
   

    return (
    <>
        <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
      <div>Login</div>
        </div>


        <div className='simpson'>
        <img 
        width={100}
        onClick={goToHome} 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/270px-The_Simpsons_yellow_logo.svg.png'/>
      
    </div>


    <div className='simpson-area'>
      <ul className='simpsonList'>{simpsonList.map(simpson=>(<li>{simpson}</li>))}</ul>

      <div class='search'> 
      <FontAwesomeIcon icon={faSearch}/>  
      <input type="text" onKeyPress={(event)=>search(event)}/>
      </div>

      </div>


      <div>
 
      </div>
    </>
  )
}

export default Navbar
