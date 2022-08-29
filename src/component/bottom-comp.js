
import "../component.styles/botClass.style.scss"

const botComp = () =>{
    return(
        <div className="container-bottom" id="contacts">
        <h1 className="title">Contacts</h1>
        <div className="contacts1">
          <div className="contact">
            <h2 className="way-of-contact">Discord</h2>
            <p className="how-to-contact">Add me - Taso#2660</p>
          </div>
          <div className="contact">
            <h2 className="way-of-contact">Discord server</h2>
            <p className="how-to-contact">Join here!</p>
          </div>
          <div className="contact">
            <h2 className="way-of-contact">Email</h2>
            <p className="how-to-contact">Mail me at: ***</p>
          </div>
        </div>
        <div className="footer">
          <p>Made by taso</p>
        </div>
      </div>
    )
}
export default botComp