import BookMark from "../BookMark/BookMark";

const Bookmarks = ({ bookMarks }) => {
    

    return (
        <div className="lg:w-1/3 border p-5 bg-gray-100">
            <h2 className="text-2xl font-semibold">Bookmark blogs: {bookMarks.length} </h2>
            <div>
                {
                    bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;