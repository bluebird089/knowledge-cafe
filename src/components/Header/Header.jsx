import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 container mx-auto border-b-[1px]'>
            <h1 className="text-4xl">Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;