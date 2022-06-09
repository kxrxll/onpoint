import "./layout.css";

const Layout = (props) => {

  const {setPage, setSlideLeft, setSlideRight} = props;

  let touchstartX = 0
  let touchendX = 0
      
  function checkDirection() {
    if (touchendX < touchstartX) {
      setSlideLeft(true);
      setTimeout(() => {
        setPage(2);
        setSlideLeft(false);
      }, 2000);
    }
    if (touchendX > touchstartX) {
      setSlideRight(true);
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
    <div className={setSlideLeft ? "layout_background moveBgLeft" : "layout_background"} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <nav className="layout_controls" />
      <div className="layout_logo" />
      {props.children}
    </div>
  )
}

export default Layout;