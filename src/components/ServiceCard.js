import './ServiceCard.scss'

const styles = () => {}

const ServiceCard = ({backgroundImage}) => {
    return(
        <div class="service-card">
        <div className="image"  style={{ backgroundImage: `url("${backgroundImage}"` }}>
        </div>

        <span className='title'>Title</span>
        <span className='desc'>Description</span>
        <button>View</button>
        </div>
    )
}

export default ServiceCard;