import { useState } from "react";

function MainList({ oneroom }) {
  const [selectedRoom, setSelectedRoom] = useState(null); // 클릭된 방
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        {oneroom.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenModal(item)}
            >
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.price}원</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedRoom && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRoom.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  className="img-fluid mb-3"
                />
                <p>{selectedRoom.content}</p>
                <p>가격: {selectedRoom.price}원</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainList;
