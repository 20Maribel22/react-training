import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Content from "../Content/Content";
import Title from "../Title/Title";
import Count from "../Count/Count";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import Rectangle from "../Rectangle/Rectangle";
import InputText from "../InputText/InputText";
import Text from "../Text/Text";
import ButtonList from "../ButtonList/ButtonList";
import Project from "../Project/Project";
import TextList from "../TextList/TextList";
import Scrollbars from "../Scrollbars/Scrollbars";
import Menu from "../Menu/Menu";
import Pagination from "../Pagination/Pagination";
import Countries from "../Countries/Countries";
import Rating from "../Rating/Rating";
import StarRating from "../StarRating/StarRating";
import ToDoList from "../ToDoList/ToDoList";
// import animal1 from "./../../images/animal1.jpeg";
// import animal2 from "./../../images/animal2.jpg";
// import animal3 from "./../../images/animal3.jpg";
// import animal4 from "./../../images/animal4.jpg";
// import animal5 from "./../../images/animal5.jpg";
// import animal6 from "./../../images/animal6.jpg";
// import {projects} from "./../../helpers/projectList"

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [show, setShow] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const [todos, setTodos] = useState([
    { id: 1, text: "Hit the gym", status: true, },
    { id: 2, text: "Pay bills", status: true, },
    { id: 3, text: "Meet George", status: true, },
    { id: 4, text: "Buy eggs", status: true, },
    { id: 5, text: "Read a book" , status: true, },
    { id: 6, text: "Organize office", status: false, }

  ]);

  const navItems = [
    { id: 1, title: "News", link: "/news" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Images", link: "/images" },
    { id: 4, title: "Delivery", link: "/delivery" },
    { id: 5, title: "Contacts", link: "/contacts" },
  ];

  const cardsItems = [
    {
      id: 1,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695900430_gas-kvas-com-p-kartinki-zverei-16.jpg",
    },
    {
      id: 2,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696441352_gas-kvas-com-p-kartinki-pro-zhivotnikh-32.jpg",
    },
    {
      id: 3,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://avatars.mds.yandex.net/i?id=2c086d01f21ed6b1981c46b99146a7cb7fad21ac-7749798-images-thumbs&n=13",
    },
    {
      id: 4,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://avatars.mds.yandex.net/i?id=23247b43d222cbf045028b106895b511bd69d815-8486579-images-thumbs&n=13",
    },
    {
      id: 5,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://avatars.mds.yandex.net/i?id=001275a4c5d642d79869467d47f1e3a495cf7936-4162430-images-thumbs&n=13",
    },
    {
      id: 6,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://avatars.mds.yandex.net/i?id=c9c06d2907712290a3c2862835087574ae406155-8266779-images-thumbs&n=13",
    },
    {
      id: 7,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://avatars.mds.yandex.net/i?id=bdd9a89f4ecab79bf1d94ffc74d7d9a8b9e44e90-8224882-images-thumbs&n=13",
    },
    {
      id: 8,
      name: "Animal",
      text: " Some quick example text to build on the card title and make up the bulk of the card content.",
      link: "https://avatars.mds.yandex.net/i?id=9f372cc6d5387a26fd9726aaee72e7a1faa4113d-8226521-images-thumbs&n=13",
    },
  ];

  const password = "1234567888888";

  const textList = [
    {
      id: 1,
      text: "Однажды гуляла я по лесу. Наступила осень, листва на деревьях окрасиласьв яркие цвета. Тревожно гудели птицы на озере: скоро наступят холодапора бы уже улететь, чтобы в следующем году вернуться сюда вновь.",
    },
    {
      id: 2,
      text: "Тишину в лесу прерывали только редкие птичьи голоса и шелест ветра по сухим листам. Внезапно, я остановилась, услышав “тук-тук”. Я пошла назвук, но, как только я дошла до дерева, по котором стучал невидимый лесной барабанщик, звук раздался уже на другом стволе, словно неведимка решил поиграть со мной в догонялки.",
    },
    {
      id: 3,
      text: " Я обошла дерево по кругу, недоумевая, кто же стал причиной шума? Запрокинув голову, я увидела, как на толстой кленовой ветке сидит дятел.Я сразу поняла, что именно он стал причиной шума и, словно по мановению волшебной палочки он застучал твердым черным клювом по коре, оглашая лес редким “тук-тук”.",
    },
  ];

 

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://restcountries.com/v3.1/region/europe"
      );
      // console.log(res.data);
      setCountries(res.data);
      setLoading(false);
    };
    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="body">
      <Header />
      <Nav items={navItems} />
      <Content cards={cardsItems} />
      <Title number={password} />
      <Count />
      <Button />
      {/* <Slider /> */}
      <Rectangle />
      <InputText />
      <Text list={textList} />
      <ButtonList />
      <Project />
      <TextList list={textList} />
      <Scrollbars />
      <Menu />
      <Countries countries={currentCountry} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Rating />
      <StarRating />
      <ToDoList todos={todos}  setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;


