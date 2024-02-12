import React, { useState } from "react";



function Slider() {
   const [card, setCard] = useState([
    { id: 1, name: "Animal",  link: "https://yandex.ru/images/search?pos=0&from=tabbar&img_url=http%3A%2F%2Fmobimg.b-cdn.net%2Fv3%2Ffetch%2F80%2F807548893d3c824877406205a7aed13c.jpeg%3Fw%3D1470%26r%3D0.5625&text=животные+картинки&rpt=simage&lr=10309" },
    { id: 2, name: "Animal",  link: "https://yandex.ru/images/search?pos=1&from=tabbar&img_url=http%3A%2F%2Fproprikol.ru%2Fwp-content%2Fuploads%2F2020%2F09%2Fkartinki-milyh-zhivotnyh-52.jpg&text=животные+картинки&rpt=simage&lr=10309" },
    { id: 3, name: "Animal",  link: "https://avatars.mds.yandex.net/i?id=2c086d01f21ed6b1981c46b99146a7cb7fad21ac-7749798-images-thumbs&n=13" },
    // { id: 4, name: "Animal",  link: "https://avatars.mds.yandex.net/i?id=23247b43d222cbf045028b106895b511bd69d815-8486579-images-thumbs&n=13" },
    // { id: 5, name: "Animal",  link: "https://avatars.mds.yandex.net/i?id=001275a4c5d642d79869467d47f1e3a495cf7936-4162430-images-thumbs&n=13" },
    // { id: 6, name: "Animal",  link: "https://avatars.mds.yandex.net/i?id=c9c06d2907712290a3c2862835087574ae406155-8266779-images-thumbs&n=13" },
    // { id: 7, name: "Animal",  link: "https://avatars.mds.yandex.net/i?id=bdd9a89f4ecab79bf1d94ffc74d7d9a8b9e44e90-8224882-images-thumbs&n=13" },
    // { id: 8, name: "Animal",  link: "https://avatars.mds.yandex.net/i?id=9f372cc6d5387a26fd9726aaee72e7a1faa4113d-8226521-images-thumbs&n=13" },
    

   ])
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active"> {
        card.map((i) => ( <img src={i.link} className="d-block w-100" alt={i.name} />))
      }
       
      </div>
      {/* <div className="carousel-item"> {
      card.map((i) => ( <img src={i.link} className="d-block w-100" alt={i.name} />))}
      </div>
      <div className="carousel-item">{
      card.map((i) => ( <img src={i.link} className="d-block w-100" alt={i.name} />))}
      </div> */}
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </a>
    </div>
  );
}

export default Slider;
