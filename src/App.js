import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          curOpen={currentOpen}
          onOpen={setCurrentOpen}
          text={item.text}
          title={item.title}
          num={i}
          key={item.title}
        />
      ))}
    </div>
  );
}
function AccordionItem({ num, title, text, curOpen, onOpen }) {
  let isOpend = num === curOpen;
  const handleOpen = () => {
    onOpen(isOpend ? null : num);
  };
  return (
    <div className={`item ${isOpend ? "open" : ""}`} onClick={handleOpen}>
      <p className="number">{num > 9 ? num : `0 ${num + 1}`}</p>
      <h3 className="title">{title}</h3>
      <p className="icon">{isOpend ? "-" : "+"}</p>
      {isOpend && <div className="content-box"> {text}</div>}
    </div>
  );
}
