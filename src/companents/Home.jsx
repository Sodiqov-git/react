import Image from '../assets/i.webp';



function Home() {

    return (
        <div className="container">
            <h1>Welcome to <br /> my shop!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod mollitia <br /> ducimus distinctio non eligendi eius saepe rem vero nihil labore eveniet <br /> voluptate expedita,  quo accusamus minus incidunt debitis odit.</p>
            <img className='web' src={ Image } alt="" />
        </div>
    )
}

export default Home;