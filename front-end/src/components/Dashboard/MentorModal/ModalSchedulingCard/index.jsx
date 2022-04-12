import { VscChromeClose } from "react-icons/vsc";
import "./styles.css";

export const ModalSchedulingCard = ({
  schedule,
  setSchedule,
  closeModal,
  available,
}) => {

  const handleSchedule = () => {
    setSchedule((prevState) => !prevState);
    console.log(schedule);
  };

  const nextPage = () => {
    if (schedule) {

    }
  }

  return (
    <div className="mentor-modal-box-scheduling">
      <div className="close-button">
        <button id="modal-close-button" onClick={closeModal}>
          <VscChromeClose size={30} color="var(--primary-01)" />
        </button>
      </div>
      <div className="scheduling-button-wrapper">
        <div className="scheduling-card">
          <h4>Agenda semanal</h4>
          <hr />
          <button onClick={handleSchedule}>18h</button>
        </div>
        <button id="go-ahead-button">Agendar</button>
      </div>
    </div>
  );
};
