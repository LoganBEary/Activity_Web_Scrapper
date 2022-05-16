import './component_css/Card.css'

const DynCard = (props) => {

  return (
    <div className='card-item'>
    {/*<img src={props.imgLink} alt='Activity'/>*/}
    <p>{props.theTitle}</p>
    <h2>{props.theBody}</h2>
    {/*TODO: Update href to be validated for malicious code??*/}
    <a href={props.urlLink}>
    <button>Link!</button>
    </a>
    </div>
  )
}
export default DynCard
