import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className=' md:container mx-auto '>
            <div className='flex justify-between items-center mx-4 border-b-2 py-4' >
                <h1 className="text-3xl md:text-4xl font-bold">Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;