import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import login__ilustration from "../../assets/work.png";
import "./styles.css";

export const Authentication = () => {
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(true);

  const [localData, setLocalData] = useState(() => {
    const userData = localStorage.getItem("@TechnicalShare:userData");

    if (userData) {
      return JSON.parse(userData);
    }

    return false;
  });

  useEffect(() => {
    if (localData !== false) {
      navigate("/dashboard");
    }
  }, []);

  const toggleComponents = () => {
    setIsRegistered((prevState) => !prevState);
  };

  return (
    <>
      <Header page="public" />
      <main className="flexbox__container">
        <div className="login__page__headline">
          <div className="headline">
            <h3>
              Faça parte de uma comunidade profissional de mentores e mentorados
              do <p>#SangueLaranja</p>
            </h3>
          </div>
          <figure className="login__ilustration">
            <img id="login__svg" src={login__ilustration} alt="" />
          </figure>
        </div>
        {isRegistered ? (
          <SignIn toggleComponents={toggleComponents} />
        ) : (
          <SignUp toggleComponents={toggleComponents} />
        )}
      </main>
    </>
  );
};
