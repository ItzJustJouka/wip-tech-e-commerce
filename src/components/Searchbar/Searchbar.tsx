import "./Searchbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  return (
    <div className="search-bar__container">
      <input type="search" placeholder="Search" className="search-bar" />
      <button type="submit" className="btn btn-outline-primary search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar