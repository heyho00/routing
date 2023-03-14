import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  // a 태그를 사용해 새로고침없이 url만 변경하기 위해 이렇게 했었다.
  // const handleClick = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   const state = {};
  //   const title = "";
  //   const url = "/about";
  //   window.history.pushState(state, title, url);
  // };

  const navigate = useNavigate();
  const handleClickLogout = () => {
    navigate("/");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/">Home</NavLink>
            {/* NavLink를 이용하면 선택된 태그의 className에 active가 붙는다. 이걸 이용해 스타일링.*/}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button type="button" onClick={handleClickLogout}>
              Log out
            </button>
            {/* 따로 페이지이동없이 걍 로그아웃하는거 */}
            {/* <Link to="/logout">Log out</Link> 페이지 이동후 리다이렉트 */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
