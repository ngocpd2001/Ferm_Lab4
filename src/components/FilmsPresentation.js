import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// import { Films } from '../shared under/ListOfFilms';
// Custom hook for toggling theme mode
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

export default function FilmPresentation({films}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  function handleOpenModal(film) {
    setSelectedFilm(film);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedFilm(null);
    setIsModalOpen(false);
  }

  return (
    <div className={`${isDarkMode ? 'bg-dark text-black' : 'text-white'}`}>
      
    <div className="container">
    <div className="row">
        {films.map((film) => (
          <div key={film.id} className="col-md-4 col-sm-6 mb-5">  
            <div className="card h-100 shadow">
              <img className="card-img-top" src={film.img} alt={film.title} />
              <div className="card-body">
                {/* <h5 className="card-title text-center mb-3">{film.title}</h5>
                <p className="card-text text-center font-weight-bold">{film.nation}</p>
                <p className="card-text text-center">{film.year}</p> */}
                <div className="d-flex justify-content-center mt-3">
                <Link to={`detail/${film.id}`}>
                  <button className="btn btn-outline-dark w-100">Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={{ content: { width: 500, height: 500 } }} >
        {selectedFilm && (
          <div>
            
            <h2>{selectedFilm.title}</h2>
            <p>{selectedFilm.img}</p>
            <p>{selectedFilm.nation}</p>
            <p>{selectedFilm.year}</p>
            <p>{selectedFilm.desc}</p>
            <p>{selectedFilm.clip}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </Modal>
      
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-danger " onClick={toggleDarkMode}>
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </div>
    </div>
  );
}
