import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom';
import SchService from '../../service/api/SchService'

function SchList() {

    const history = useHistory()
    
    const {getSchAllAdmin} = SchService;
    const [list, setlist] = useState([])
    
    useEffect(() => {
      const fetchData = async ()=>{
        await getSchAllAdmin().then((res)=>{
            setlist(res?.data)
        })
      }

      fetchData()
    }, [])
        

    return (
        <div>
            {
                list?.map((item,index)=>{
                    return(
                        <div key={index} style={{borderColor:"#ccc",margin:10,backgroundColor:"#f8f8f8",padding:16}}>
                            <p>{index+1}</p>
                            <button style={{padding:10}} onClick={()=>history.push("/edit-schlorship/"+item?._id)}>Edit </button>
                             <pre style={{wordBreak:"break-all",maxWidth:100}}>{JSON.stringify(item, null, 2)}</pre>   
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SchList