import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//✅네비게이션 바 (홈로고, 로그인기능, 검색기능, 메뉴바가 있음)

const Navbar = ({ authenticate, setAuthenticate }) => { //Navbar에 있는 로그인 버튼때문에 받아온 props
  const menuList = [
    "Homer",
    "Milhous",
    "Walter Seymour Skinner",
    "Krusty the Clown",
    "snowball",
  ];
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();

  //✔️URL을 바꿔주는 작업 (쿼리를 붙힌다.)
  //홈 화면 url인 '/' 에서 추가로 '?q=키워드'가 붙음 ==> 화면경로가 바뀌는것은 아님(쿼리를 준것뿐)
  const onCheckEnter = (event) => {         //읽어오고 싶은값이 event안에 들어가있음 
    if (event.key === "Enter") {            //event로 받는 키가 Enter면 실행
      navigate(`?q=${event.target.value}`); //입력한 검색어를 읽어와서 url을 바꿔준다.
    }
  };


  
  return (
    <div>

      {/* 얘는 무슨 기능인지 모르겠네 */}
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>


      
      {/* ✅로그인버튼 */}
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>Log Out</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>Log In</span>
          </div>
        )}
      </div>



      {/* ✅메인 로고 */}
      <div className="nav-logo">
        <Link to="/">
          <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/270px-The_Simpsons_yellow_logo.svg.png" />
        </Link>
      </div>



      <div class="nav-menu-area">

        {/* ✅메뉴 */}
        <ul className="menu">
          {menuList.map((menu, index) => ( //메뉴마다 /# 링크를 걸어놓긴했는데 아무기능도없음.
            <li>
              <a href="#" key={index}> {menu} </a>
            </li>
          ))}
        </ul>


        {/* ✅검색창 */}
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" onKeyPress={onCheckEnter} />
          {/* text창에 검색했을때 이벤트 onCheckEnter 호출됨 */}
          {/* onKeyPress는 내가 text창에 뭔가를 입력할때마다 호출되는 이벤트임 */}
        </div>

      </div>



    </div>
  );
};

export default Navbar;