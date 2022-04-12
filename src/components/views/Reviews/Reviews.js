import { useState, useEffect } from 'react';
import { ApiService } from '../../ApiService/ApiService';
import s from './Reviews.module.css';

const apiService = new ApiService();

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    apiService
      .getMovieDetailsReviews(id)
      .then(setReviews)
      .catch(error => console.log('Error: ', error.response.status));
  }, [id]);
  return (
    <ul className={s.list}>
      {reviews.length !== 0
        ? reviews.map(review => (
            <li key={review.id} className={s.item}>
              <h3 className={s.title}>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        : 'we dont have any reviews for this movie'}
    </ul>
  );
}
