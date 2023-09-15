import PropTypes from 'prop-types';
import { BsBookmarkFill } from 'react-icons/bs';


const Blog = ({ blog, handleAddBookmark, handleMarkedRead }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='space-y-3 py-3 border-b-[1px]'>
            <img className='w-full rounded-2xl' src={cover} alt={`Cover of title: ${title}`} />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h5 className='font-bold text-lg'>{author}</h5>
                        <p className='text-sm text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-gray-500'>{reading_time} min read</p>
                    <button onClick={() => handleAddBookmark(blog)}><BsBookmarkFill></BsBookmarkFill></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <div>
                {
                    hashtags.map((hashtag, idx) => <span className='text-gray-500 text-sm mr-3' key={idx}><a href="">#{hashtag}</a></span>)
                }
            </div>
            <button onClick={() => handleMarkedRead(reading_time)} className='text-[#6047EC] hover:underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkedRead: PropTypes.func.isRequired
}

export default Blog;