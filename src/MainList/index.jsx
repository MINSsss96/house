import { Link } from "react-router-dom";

function MainList({ oneroom }) {
  return (
    <div className="container">
      <div className="row">
        {oneroom.map((item) => (
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

export default MainList;
