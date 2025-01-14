import PropTypes from 'prop-types';
const Blog = ({ blog , handleAddToBookMark}) => {
    const { title, cover, author_img, author, posted_date, reading_time ,hashtags} = blog;

    return (
        <div className='my-10'>
            {/* Cover */}
            <img className='rounded-xl lg:w-[940px] object-cover mb-5 ' src={cover} alt="" />
            {/* Author info */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 flex-col lg:flex-row'>
                    <img className='h-16 w-16 rounded-full  object-cover' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold text-2xl'>{author}</h2>
                        <p className='font-bold text-xl text-gray-400'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-xl text-gray-400'>{reading_time} min read</p>

                    {/* BookMark button */}
                    <button onClick={() => handleAddToBookMark(blog)} className='text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Title & description */}

            <div className='my-5 border-b-2 pb-6'>
                <h3 className='text-4xl font-semibold'>{title}</h3>
                <p className='text-gray-500 my-3'>
                    {
                        hashtags.map((hash,idx) => <span key={idx} className='mr-2'><a href="#">{hash}</a></span>)
                    }
                </p>
                <a className='text-violet-900 underline ' href="#">Mark as read</a>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired
}


export default Blog;