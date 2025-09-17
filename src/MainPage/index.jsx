import { useState } from "react";

function MainPage({ oneroom, isHouseView }) {
  const [sortType, setSortType] = useState(null); // 'price' or 'title'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [selectedRoom, setSelectedRoom] = useState(null); // 모달용
  const [showModal, setShowModal] = useState(false);

  const handleSort = (type) => {
    if (sortType === type) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType(type);
      setSortOrder("asc");
    }
  };

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setShowModal(false);
  };

  const sortedData = [...oneroom].sort((a, b) => {
    if (!sortType) return 0;
    if (sortType === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    }
    if (sortType === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <div className="container">
      {/* 정렬 버튼 (Main 모드일 때만 표시) */}
      {!isHouseView && (
        <div className="d-flex justify-content-start mb-3 p-2 bg-purple text-white">
          <button
            className="btn btn-light me-2"
            onClick={() => handleSort("price")}
          >
            가격 {sortType === "price" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
          </button>
          <button className="btn btn-light" onClick={() => handleSort("title")}>
            물건명 {sortType === "title" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
          </button>
        </div>
      )}

      <div className="row">
        {sortedData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{ cursor: !isHouseView ? "pointer" : "default" }}
              onClick={() => !isHouseView && handleOpenModal(item)}
            >
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                {/* House 모드에서는 title+image만, Main 모드에서는 price 추가 */}
                {!isHouseView && <p>{item.price}원</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 (Main 모드에서 카드 클릭 시) */}
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

export default MainPage;
