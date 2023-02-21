import React, {useState, useEffect} from 'react'
import styles from './Paginated.module.css'



const Paginated = ({page, setPage, totalPage}) => {
    const [pages, setPages] = useState([])
    useEffect(()=>{
        let arr = []
        for(let i=0; i<totalPage; i++){
            arr.push(i+1)
        }
        setPages(arr)
        console.log(arr)
    },[totalPage])
    return (
        <div className={styles.mein}>
            <i onClick={()=>setPage(page<=1?1:page-1)} className="bi bi-arrow-left-circle"></i>
            <ul className={styles.pages}>
                {pages.map((item)=>
                    <li onClick={()=>{setPage(item)}} className={item===page?styles.active:''}>{item}</li>
                )}
            </ul>
            <i onClick={()=>setPage(page>=totalPage?1:page+1)} className="bi bi-arrow-right-circle"></i>
        </div>
    );
};
export default Paginated