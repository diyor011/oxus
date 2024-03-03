import "./Card.css";

const Card = ({image, desc, baza, setBaza, id, baseIndex, setBaseIndex}) => {
    const f = () => {
        setBaza([...baza, {imgName: `00${id[1]}-${id[3]}`, desc: desc}])
        setBaseIndex(baseIndex + 1)
    }

    return <div className="card" onClick={f}>
            <img className="card__pic" src={image} alt="picture" />
            <p className="card__title">{desc}</p>
        </div>
}

export default Card
