import React, { useState } from "react";
import './Text.css'

function Text({list}) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Однажды гуляла я по лесу.');

    function handleClick () {
        setShow(true)
        setText('')
    }

  return (
    <div className="text">
     <h1 className="text__title">Текст</h1>

     {show && list.map((i) => {return <p className="text__description">
       {i.text}
       </p> })
     }
     <p className="text__description">{text}</p>
      <button className="btn btn-warning" onClick={handleClick}>Показать подробнее</button>
    </div>
  );
}

export default Text;

// import React, { useState } from "react";
// import "./Text.css";

// function Text({ list }) {
//   const [show, setShow] = useState(false);
//   const [text, setText] = useState("Однажды гуляла я по лесу.");

//   const history = [
//     "Однажды гуляла я по лесу.Наступила осень, листва на деревьях окрасилась в яркие цвета. Тревожно гудели птицы на озере: скоро наступят холода, пора бы уже улететь, чтобы в следующем году вернуться сюда вновь.",
    
//     <br />,
//     "Тишину в лесу прерывали только редкие птичьи голоса и шелест ветра по сухим листам. Внезапно, я остановилась, услышав “тук-тук”. Я пошла на звук, но, как только я дошла до дерева, по котором стучал невидимый лесной барабанщик, звук раздался уже на другом стволе, словно неведимка решил поиграть со мной в догонялки.",
    
//     <br />,
//     "Я обошла дерево по кругу, недоумевая, кто же стал причиной шума? Запрокинув голову, я увидела, как на толстой кленовой ветке сидит дятел. Я сразу поняла, что именно он стал причиной шума и, словно по мановению волшебной палочки он застучал твердым черным клювом по коре, оглашая лес редким “тук-тук”.",
//   ];

//   function handleClick() {
//     setShow(true);

//     setText(history);
//   }

//   return (
//     <div className="text">
//       <h1 className="text__title">Текст</h1>

//       {show && <p className="text__description">{text}</p>}
       
//       <button className="btn btn-warning" onClick={handleClick}>
//         Показать подробнее
//       </button>
//     </div>
//   );
// }

// export default Text;
