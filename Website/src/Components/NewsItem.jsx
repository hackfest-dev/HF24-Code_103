import Image from '../assets/news-img.png'

const NewsItem = ({title,description,src,url}) => {
    // const { title,description,src,url, ...filteredProps } = this.props;
    return (
      <div className="text-light mb-3 inline-block m-4 px-2 py-2 bg-[#F1F1F1] rounded-xl shadow-lg" style={{maxWidth:"40rem", height:"25rem"}}>
              <img src={src?src:Image} style={{height:"200px",width:""}} className="card-img-top mx-auto p-2" alt="..."/>
              <div className="card-body">
                  <h5 className="p-2 m-1 font-bold font-dosis">{title.slice(0, 50)}...</h5>
                  <p className="p-2 m-1 font-dosis">{description?description.slice(0, 100):"News happened just recently.It is information about something that has just happened."}</p>
                  <a href={url} className="p-2 mx-1 my-2 bg-[#4753AB] rounded-xl text-white font-dosis font-bold">Read More</a>
              </div>
          </div>
    )
  }
export default NewsItem