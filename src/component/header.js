import '../component.styles/header.style.scss'

const header = (props) =>{
    return(
        <div className="container-top">
      <div className="container-top-content">
        <div className="container-top-text">
          <h1 className="taso-name">Taso</h1>
          <h1 className="taso-job">Your website designer</h1>
        </div>
        <a href="#" className="btn btn-taso">
          Contact me {props.name}
        </a>
      </div>
    </div>
    )
}

export default header;