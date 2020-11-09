import "./SearchBar.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

function SearchBar() {
  return (
    <form className="searchbar">
      <input className="searchbar__field" type="search" placeholder="Search" />
      <div className="cta__container">
        <Button />
        <div className="avatar__wrapper">
          <Avatar />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
