import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className=" h-min bg-slate-100 rounded-2xl p-4 my-3 space-y-3">
            <h2 className='font-semibold text-xl text-center'>Bookmarks: {bookmarks.length}</h2>    
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }        
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;