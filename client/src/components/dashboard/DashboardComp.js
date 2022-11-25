import moment from 'moment';
import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import NewsService from '../../service/api/NewsService';
import Loading from '../Loading';

function DashboardComp() {
    const history = useHistory();
    const {newsGet,remNewsGetById} = NewsService;
    const [list, setList] = useState([]);
    const [loading, setloading] = useState(true);
    const [count, setcount] = useState(0);
    const [page, setpage] = useState(1)

    useEffect(() => {
        newsGet(page,5)
        .then(items => {
            setList(items.data)
            setcount(items.count)
            
            setloading(false);
        })
        
      }, [loading,page])


    const remNews = async (newsId)=>{

        if(window.confirm("Are you to delete this news")){
            setloading(true)
            const res = await remNewsGetById(newsId);
            alert("Post Deleted...")
            setloading(false);
        }
       

    }
    const prevPage = ()=>{
        if(page>1){
            setpage(page-1)
        }
        
    }
    const nextPage = ()=>{
        if(Math.ceil(count/5) > page){
            setpage(page+1)
        }
        
    }

    if(loading){
        return<Loading />
    }

    return (
        <div >
            <div className='dashboard_comp_header'>
                <h2>Top Articles</h2>
                <div>    
                    
                <p><button onClick={()=>prevPage()}>Prev</button>{page} / {Math.ceil(count/5)} <button onClick={()=>nextPage()}>Next</button></p> </div>
                   
            </div>

            <div className='dashboard_articles'>
                {list.map((item,index=0) =>
                    <div className='dashboard_articles_comp' key={index} >
                        <div className='articles_comp_first'>
                            <div className='dashboard_articles_comp_left articles_comp'>
                                <p>{(index+1) + ((page-1) * 5)} </p>
                            </div>
                            <div className='dashboard_articles_comp_center articles_comp'>
                                <img src={item.image}/>
                            </div>
                            <div className='articles_content articles_comp'>
                                <h5>{item.title}</h5>
                                <h5>{item?.content.length > 50 ? item?.content?.substring(0,50) : item?.content}</h5>
                                <p>{moment(item.timestamp).fromNow()}</p>
                            </div>
                        </div>

                        <div className='articles_action'>
                            <p onClick={()=>history.push("/edit-post/"+item._id)}>Edit</p>
                            <p onClick={()=>remNews(item._id)}>Delete</p>
                        </div>


                    </div>
                )}

               

            </div>
            

        </div>
    )
}

export default DashboardComp