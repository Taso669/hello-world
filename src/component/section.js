

const section = (props) =>{
    return(
        <div className="section">
          <h2 className="title">
            {props.title}
          </h2>
          <p className="section-text">
            {props.text}
          </p>
        </div>
    )
}

export default section