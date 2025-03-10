import Center from '../assets/center.png';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Header() {

    return (
        <div className="container">
            <div className='best'>
                <img className='center' src={Center} alt="" />
                <h1>The Best Streaming Experience</h1>
                <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                <Button variant="contained" startIcon={<PlayArrowIcon className='play' />}>
                    Start Watching Now
                </Button>
            </div>
        </div>


    )
}

export default Header;