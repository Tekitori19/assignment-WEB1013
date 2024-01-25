import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        {/* <i className="topIcon fab fa-instagram-square"></i> */}
        {/* <i className="topIcon fab fa-pinterest-square"></i> */}
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Trang chủ
            </Link>
          </li>
          <li className="topListItem">Liên hệ</li>
          <li className="topListItem">Góp ý</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Hỏi đáp
            </Link>
          </li>
          {user && <li className="topListItem">Giới thiệu</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://th.bing.com/th/id/OIP._bfM2X0gndr4NEFqq6PekQHaE7?rs=1&pid=ImgDetMain"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
