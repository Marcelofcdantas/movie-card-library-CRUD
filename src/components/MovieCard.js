import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, storyline, title, id } = movie;
    return (
      <div data-testid="movie-card" className="card">
        <h1>
          { title }
        </h1>
        <img src={ imagePath } alt={ title } />
        <p>
          { storyline }
        </p>
        <Link to={ { pathname: `/movies/${id}`, state: movie } }> VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number,
    },
  ).isRequired,
};
