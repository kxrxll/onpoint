import "./layout.css";

const Layout = (props) => {

  const setPage = props.pageChanger;

  let touchstartX = 0
  let touchendX = 0
      
  function checkDirection() {
    if (touchendX < touchstartX) {
      console.log('Left!');
      setPage(2);
    }
    if (touchendX > touchstartX) {
      console.log('Right!');
      setPage(1);
    }
  }

  const handleTouchStart = (e) => {
    touchstartX = e.changedTouches[0].screenX;
  }

  const handleTouchEnd = (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  }

  return (
    <div className="layout_background" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <nav className="layout_controls" />
      <div className="layout_logo" />
      {props.children}
    </div>
  )
}

export default Layout;