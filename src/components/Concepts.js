function Concepts(props) {
    const concepts = props.concepts
    return (
        <li className={props.className}>
        <img src={concepts[props.num].image} alt="TODO: TITLE" />
          <h2>{concepts[props.num].title}</h2>
          <p>{concepts[props.num].description}</p>
        </li>
    )    
}

export default Concepts;