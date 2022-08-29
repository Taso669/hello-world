import Section from './section'


const midComp = () =>{
    return(
        <div className="container-mid">
        <h1 className="container-mid-name">
          My skills
        </h1>
        <h2 className="container-mid-text">Currently learning: html, css, js, java</h2>
        <Section title= "Web development" text= "I'm starting to make fashionable and responsive websites using react.js" />
        <Section title= "Plugins" text= "I can make plugins for spigot engine and it's forks!" />
        <hr></hr>
        <div className="future-plans-sections">
          <h1 className="container-mid-name">
            My plans
          </h1>
          <Section title= "Backend" text= "Learn how backend works via Go Lang language to step up my web developer game" />
          <Section title= "Discord bots" text= "Learning how to use discord.js framework to build fully functional bots" />
          <Section title= "Servers" text= "Learn how to use linux to one day start my own hosting provider" />
        </div>
      </div>
    )
}

export default midComp