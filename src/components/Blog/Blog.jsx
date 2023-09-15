import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
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
                <div>
                    <p className='text-gray-500'>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <div>
                {
                    hashtags.map((hashtag, idx) => <span className='text-gray-500 text-sm mr-3' key={idx}><a href="">#{hashtag}</a></span>)
                }
            </div>
            <p className='text-[#6047EC]'><a className='hover:underline' href="">Mark as read</a></p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;