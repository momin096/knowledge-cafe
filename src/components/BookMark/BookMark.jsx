
const BookMark = ({ bookMark }) => {
    const { title } = bookMark;
    return (
        <div className="p-5 rounded-lg my-3 bg-white">
            <h3 className="text-2xl font-medium">{title}</h3>
        </div>
    );
};

export default BookMark;