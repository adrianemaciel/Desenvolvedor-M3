const Modal = ({ title, onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <span className="modal-header-title">{title}</span>
        <button onClick={onClose} className="modal-header-button">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 18.852L17.5547 1.00001" stroke="black" />
            <line
              y1="-0.5"
              x2="25.2899"
              y2="-0.5"
              transform="matrix(0.711746 0.702437 -0.874311 0.485367 0 1.23547)"
              stroke="black"
            />
          </svg>
        </button>
      </div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

module.exports = Modal;
