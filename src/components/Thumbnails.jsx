import '../App.scss';

function Thumbnails(props) {

    return (

        <section className="thumbnail">
  
  
            <h2 className="thumbnail__heading">Next Videos</h2>
            <ul className="thumbnail__list">

               {props.videoThumbs.filter((thumbnail) => thumbnail.id !== props.selectedVideo.id).map((thumbnail)=> (
                    <li className="thumbnail__item" key={thumbnail.id}
                        onClick={() => props.handleVideoSelection(thumbnail.id)}>

                        <img src={thumbnail.image} className="thumbnail__img" />
                        <div className="thumbnail__box">
                            <h3 className="thumbnail__img-heading">{thumbnail.title}</h3>
                            <h4 className="thumbnail__img-name">{thumbnail.channel}</h4>
                        </div>

                    </li> 
                     ))}

            </ul>
            
      </section> 
    );
};

export default Thumbnails;


 