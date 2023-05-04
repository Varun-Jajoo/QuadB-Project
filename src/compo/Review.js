import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Review() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    async function fetchShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    }
    fetchShow();
  }, [id]);

  const handleBookingFormSubmit = (event) => {
    event.preventDefault();
  
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    setShowBookingForm(false);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  const backdropStyle = {
    backgroundImage: `url(${show.image.original})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "100vh",
    position: 'relative',
    filter: " brightness(100%)  ",
    marginTop :"0"
    
  };

  return (
    <div className="" style={{ fontSize :"4vh",color: 'yellow', fontWeight :"bold"}}>
      <div className=""style={backdropStyle}>


        <div className="overlay" style={{opacity :"1"}}></div>
        <div className="">
          <div className="">
            <div className="" style={{marginTop :"3vh"}}>
              <img id="lol"src={show.image.medium} alt={show.name} className=" img-fluid rounded" style={{height :"80vh",marginTop :"10vh",marginLeft :"7vw"}}/>
            </div>
            <div className="" style={{margin:"20vh"}}>
              <h1>{show.name}</h1>
              <p>{show.summary.replace(/<[^>]+>/g, '')}</p>
              <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
              <p><strong>Language:</strong> {show.language}</p>
              <p><strong>Rating:</strong> {show.rating.average}</p>
              <button onClick={() => setShowBookingForm(true)}  className='switch'>Book Movie Ticket</button>
              {showBookingForm && (
                <form onSubmit={handleBookingFormSubmit} className="mt-4">
                <div className="form-group">
                  <label htmlFor="movieName">Movie Name:</label>
                  <input type="text" id="movieName" value={show.name} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={userDetails.name || ''} className="form-control" onChange={(event) => setUserDetails({ ...userDetails, name: event.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={userDetails.email || ''} className="form-control" onChange={(event) => setUserDetails({ ...userDetails, email: event.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" value={userDetails.phone || ''} className="form-control" onChange={(event) => setUserDetails({ ...userDetails, phone: event.target.value })} />
                </div>
                <button type="submit" className="switch">Submit</button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
