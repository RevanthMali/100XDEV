import { VideoCard } from "./videoCard"

const VIDEOS = [{
    title:"The Devarakonda: Family Star|Teaser(Telugu)",
    image:"thumbnail.jpg",
     views:"2.3M",
     author:"T-series",
     timestamp:"3 days ago"
    },{
        title:"The Devarakonda: Family Star|Teaser(Tamil)",
        image:"thumbnail.jpg",
         views:"2.3M",
         author:"T-series",
         timestamp:"3 days ago"
        },{
            title:"The Devarakonda: Family Star|Teaser(Hindi)",
            image:"thumbnail.jpg",
             views:"2.3M",
             author:"T-series",
             timestamp:"3 days ago"
            },
            {
                title:"The Devarakonda: Family Star|Teaser(Malayalam)",
                image:"thumbnail.jpg",
                 views:"2.3M",
                 author:"T-series",
                 timestamp:"3 days ago"
                },
            {
                title:"The Devarakonda: Family Star|Teaser(Kannada)",
                image:"thumbnail.jpg",
                 views:"2.3M",
                 author:"T-series",
                 timestamp:"3 days ago"
                },
            {
                title:"The Devarakonda: Family Star|Teaser(English)",
                image:"thumbnail.jpg",
                 views:"2.3M",
                 author:"T-series",
                 timestamp:"3 days ago"
                },
            {
                title:"The Devarakonda: Family Star|Teaser(Spanish)",
                image:"thumbnail.jpg",
                 views:"2.3M",
                 author:"T-series",
                 timestamp:"3 days ago"
                }
]
export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard 
            title={video.title}
            image={video.image}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
            ></VideoCard>     
        </div>)}
    </div>

}