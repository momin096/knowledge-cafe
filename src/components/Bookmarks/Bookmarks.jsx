import BookMark from "../BookMark/BookMark";

const Bookmarks = ({ bookMarks, readingTime }) => {


    return (
        <div className="lg:w-1/3 border p-5 bg-gray-100">
            <div className="border border-purple-800 bg-purple-100 p-4 rounded-xl">
                <h3 className="text-xl font-bold text-gray-600">Reading Time: {readingTime}</h3>
            </div>
            <div className="p-4 rounded-xl border border-indigo-600 mt-3 bg-indigo-100">
                <h2 className="text-2xl font-semibold">Bookmark blogs: {bookMarks.length} </h2>
            </div>
            <div>
                {
                    bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;