import React,{useEffect,useState} from 'react'
import SchService from '../../service/api/SchService'

function SchList() {

    const {getSchAllAdmin} = SchService;
    const [list, setlist] = useState([])
    
    useEffect(() => {
      const fetchData = async ()=>{
        await getSchAllAdmin().then((res)=>{
            setlist(res?.data)
        })
      }

      fetchData()
    }, [list])
        

    return (
        <div>
            {
                list?.map((item,index)=>{
                    return(
                        <div key={index} style={{borderColor:"#ccc",margin:10,backgroundColor:"#f8f8f8",padding:16}}>
                            <p>{index+1}</p>
                             <pre style={{wordBreak:"break-all",maxWidth:100}}>{JSON.stringify(item, null, 2)}</pre>   
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SchList