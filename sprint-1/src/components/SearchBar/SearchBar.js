import './SearchBar.scss'
import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'


function SearchBar () {
    return(
        <form className="searchbar">
            <input className="searchbar-field" type="search" placeholder="Search" />
                <div classname="cta__container">
                        <Button />
                    <div className="avatar__wrapper">
                        <Avatar />
                </div>
            </div>
        </form>
    )
}

export default SearchBar;