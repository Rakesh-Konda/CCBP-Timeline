// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div>
      <ul className="ul">
        <li className="lii" key={data.id}>
          <img className="img" src={data.imageUrl} alt="project" />
          <div className="cen">
            <h1>{data.projectTitle}</h1>
            <div className="ic">
              <AiFillCalendar className="icon" />
              <p>{data.duration}</p>
            </div>
          </div>
          <p>{data.description}</p>
        </li>
      </ul>
      <a href={data.projectUrl} className="vi">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
