import "./Searchbar.css"

const Searchbar = () => {
  return (
    <div className="search-bar__container">
      <input type="search" placeholder="Search" className="search-bar" />
      <button type="submit" className="btn btn-outline-primary search-button">Search</button>
    </div>
  );
}

export default Searchbar