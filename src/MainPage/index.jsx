import { useState } from "react";
import { Link } from "react-router-dom";

function MainPage({ oneroom }) {
  const [sortType, setSortType] = useState(null); // 'price' or 'title'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  const handleSort = (type) => {
    if (sortType === type) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType(type);
      setSortOrder("asc");
    }
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
      <div className="d-flex justify-content-start mb-3 p-2 bg-purple text-white">
        <button className="btn btn-light me-2" onClick={() => handleSort("price")}>
          가격 {sortType === "price" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
        </button>
        <button className="btn btn-light" onClick={() => handleSort("title")}>
          물건명 {sortType === "title" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
        </button>
      </div>

      <div className="row">
        {sortedData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <p>{item.price}원</p>
                <Link to={`/main/${item.id}`} className="btn btn-primary">
                  상세보기
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
