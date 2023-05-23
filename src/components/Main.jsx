// import videos from '../data/video-details.json';
// import views from '../assets/Icons/views.svg';
import heart from '../assets/Icons/likes.svg'
import views from '../assets/Icons/views.svg'

function Main(props) {
    return(
       <main className="main">
          <div className="main__tablet">
           <video className="video__image" controls poster={props.selectedVideo.image}>
             
           </video>
           </div>
            <div className="video">
          <div className="main__desktop">

         <h1 className="video__heading">{props.selectedVideo.title}</h1>

   <div className="video__box">
    <div className="video__views--tablet">
     <h3 className="video__channel">By {props.selectedVideo.channel}</h3>
        <div className="video__date">{props.selectedVideo.timestamp = new Date(props.selectedVideo.timestamp).toLocaleDateString('fr')}</div>
       </div>

      <div className="video__like--tablet">
      <div className="video__view-box">
     <img className="video__icon-views" src={views} alt="Views Icon" />
     <p className="video__views">{props.selectedVideo.views}</p>
       </div> 
     <div className="video__like-box">
         <img src={heart} alt="" className="video__icon-likes" />
         <p className="video__likes">{props.selectedVideo.likes}</p>
               </div>
               </div>
       </div> 
{/* TODO  add prevent default */}
<p className="video__container-comment">{props.selectedVideo.description}</p>
<h3 className="video__count">{props.selectedVideo.comments.length} Comments</h3>
</div>
</div>
</main>
    )
}    
     
export default Main;