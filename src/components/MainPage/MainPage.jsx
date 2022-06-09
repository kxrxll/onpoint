import "./mainPage.css";

const MainPage = (props) => {
  const {setPage, slideLeft, setSlideLeft} = props;

  const handleButtonTouch = (e) => {
    e.preventDefault();
    setSlideLeft(true);
      setTimeout(() => {
        setPage(2);
        setSlideLeft(false);
      }, 2000);
  }
  
  return (
    <section className={slideLeft ? "main moveLeft" : "main"}>
      <p className="main_firstText">привет,</p>
      <p className="main_secondText">это <span className="main_boldText">не</span><br /> коммерческое<br /> задание</p>
      <div className="spearm1static" />
      <div className="spearm2static" />
      <div className="blue1dynamic" />
      <div className="blue2dynamic" />
      <div className="blue3dynamic" />
      <div className="blue4dynamic" />
      <div className="blue5static" />
      <div className="blue6static" />
      <div className="blue7static" />
      <button className="main_button" onClick={handleButtonTouch}>
        <div className="button_round"/>
        <p className="button_text">Что дальше?</p>
      </button>
    </section>
  )
}

export default MainPage;