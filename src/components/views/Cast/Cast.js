import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ApiService } from '../../ApiService/ApiService';
import s from './Cast.module.css';
import image from '../images/film-null@1x.jpg';

const apiService = new ApiService();
const BASIC_URL = 'https://image.tmdb.org/t/p/w342';

export default function Cast({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    apiService
      .getMovieDetailsCast(id)
      .then(setActors)
      .catch(error => console.log('Error: ', error.response.status));
  }, [id]);
  return (
    <ul className={s.list}>
      {actors.length !== 0
        ? actors.map(actor => (
            <li key={actor.id} className={s.item}>
              <img
                className={s.image}
                src={
                  actor.profile_path
                    ? `${BASIC_URL}${actor.profile_path}`
                    : `${image}`
                }
                alt={actor.name}
              />

              <p className={s.name}>{actor.name}</p>
            </li>
          ))
        : 'Sorry there was an error'}
    </ul>
  );
}

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};
