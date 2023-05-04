import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Slide(props) {
  const { id, title, date, poster_path, name } = props;
  const navigate = useNavigate();

  const handleSlideClick = () => {
    navigate(`/review/${id}`);
  };

  return (
    <div class="card-group">
    <div className="card h-100 mx-4 my -3" onClick={handleSlideClick} style={{ border: "none", width: "12rem", backgroundColor: "transparent", textAlign: "left" }}>
      <img src={poster_path} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#163a24" }}>{!title ? name : title} </h5>
        <div className="h" style={{ color: "#163a24", textAlign: "left" }}>
          {date}
        </div>
      </div>
    </div>
    </div>
  );
}

