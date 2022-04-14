import {AiOutlineLeft,AiOutlineRight,AiFillEdit} from "react-icons/ai"
import "./style.css";

export function ProfileCard(props) {
  return (
    <section className="profileCard" style={{width: props.width}}>
      {props.header==="one" ?(
      <div className="profileCard_header-one" style={{width: props.width}}>
         <button><AiOutlineLeft size={24}/></button> 
        <h3>Hoje</h3>
        <button><AiOutlineRight size={24}/></button> 
      </div>
      ):('')}
      {props.header==="two" ?(
      <div className="profileCard_header-two">
        <h4>Meus dias disponíveis</h4>
        <button onClick={props.clickEdit}><AiFillEdit size={24} color="var(--primary-01)" /></button> 
      </div>
      ):('')}
      <div className="profileCard__scroll">
      <article>{props.children}</article>
      </div>
    </section>
  );
}
