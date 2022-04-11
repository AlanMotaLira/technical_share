import { AiOutlinePlayCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import dataAnalysis from "../../../assets/Data_analysis_PNG 1.png";
import onlineEducation from "../../../assets/Online_education_PNG 1.png";
import calendar from "../../../assets/Calendar_PNG 1.png";
import chat from "../../../assets/Chat_PNG 1.png";
import "./style.css";

export const Presentation = () => {
  const [movie, setMovie] = useState(false);

  const list = [
    {
      image: dataAnalysis,
      alt: "Ilustração de um feedback",
      text: "Tenha feedbacks efetivos",
    },
    {
      image: onlineEducation,
      alt: "Livros de estudos",
      text: "Melhores suas habilidades",
    },
    {
      image: calendar,
      alt: "Calendario de agendamento",
      text: "Agenda de forma prática",
    },
    {
      image: chat,
      alt: "Ilustração de uma troca de insights",
      text: "Troque de insights",
    },
  ];
  return (
    <section>
      <div className="presentation_descrition">
        <h3>Expanda suas habilidades e obtenha insights de forma rápida</h3>
        <button
          onClick={() => {
            setMovie(!movie);
          }}
          className="presentation_descrition--play"
        >
          <AiOutlinePlayCircle size={18} color="var(--neutral-03)" />
          saiba mais
        </button>
        <div className={`movie ${movie ? "active" : ""}`}>
          <button
            className="movie__close"
            onClick={() => {
              setMovie(!movie);
            }}
          >
            <AiOutlineCloseCircle size={25} color="var(--primary-01)" />
          </button>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <ul className="presentation_list page">
        {list.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.alt} />
            <p>{item.text}</p>
            {item.skill}
          </li>
        ))}
      </ul>
    </section>
  );
};