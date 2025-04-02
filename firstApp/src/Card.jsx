import batman from './assets/pngimg.com - batman_PNG16.jpg'

function Card() {
    return(
        <div className="card">
            <img className="cardImg" src={batman} alt="profile picture"></img>
            <h2 className="cardTitle">Aarsh</h2>
            <p className="cardText">Some random text im writing for no reason here.</p>
        </div>
    );
}

export default Card