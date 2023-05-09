import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary}</p>
      {(genres !== []) ? (
        <ul>
          {genres.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;