import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Trường THPT</span>
        <span className="headerTitleLg">Nguyễn Trãi</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ytimg.com/vi/88ZN5muyiis/maxresdefault.jpg"
        alt=""
      />
    </div>
  );
}
