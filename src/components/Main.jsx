// import videos from '../data/video-details.json';
// import views from '../assets/Icons/views.svg';
import heart from '../assets/Icons/likes.svg'
import views from '../assets/Icons/views.svg'

function Main(props) {
    return(
       <main className="video">
      
       <div className="video__container">
           <video className="video__container-image" controls poster={props.selectedVideo.image}>
             
           </video>
           
         </div>
         <h1 className="video__heading">{props.selectedVideo.title}</h1>

   <div className="video__box">
     <h3 className="video__channel">By {props.selectedVideo.channel}</h3>
     <div className="video__likes">
     <img className="video__icon-views" src={views} alt="Views Icon" />
     <p>{props.selectedVideo.views}</p>
       </div>

   <div className="video__date">{props.selectedVideo.timestamp}</div>
     <div className="video__likes">
         <img src={heart} alt="" className="video__icon-likes" />
         <p>{props.selectedVideo.likes}</p>
               </div>
       </div> 
{/* TODO  add prevent default */}
<p className="video__container-comment">{props.selectedVideo.description}</p>
<h3 className="comments__count">{props.selectedVideo.comments.length} Comments</h3>

</main>
    )
}    
     
     
 

export default Main;