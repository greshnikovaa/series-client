import React, {useState, useEffect, useCallback} from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Loading from '../../components/Loading/Loading'
import Paginated from '../../components/Paginated/Paginated';
const API_URL = process.env.REACT_APP_API_URL

const filter = [
    {title:"Все", category:"all"},
    {title:"Сериалы", category:"series"},
    {title:"Фильмы", category:"movie"},
    {title:"Мультфильмы", category:"cartoon"}
]

const Home = () => {
    const [serials, setSerials] = useState([])
    const [serialsFilter, setSerialsFilter] = useState([])
    const [category, setCategory] = useState('all')
    const [page, setPage] = useState(3)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(()=>{
        axios.get(API_URL+'api/series?page='+page)
         .then((res)=>{
            console.log('page:', res.data.page)
            console.log('totalPage:', res.data.totalPages)
            setTotalPage(res.data.totalPages)
            setSerials(res.data.series)
         })
         .catch((err)=>{
            console.log(err)
         })
    },[page])

    const getSeriesFilter = useCallback(() =>{
        if(category==='all'){
            setSerialsFilter(serials)
        }
        else{
            setSerialsFilter(serials.filter((series)=>{
                console.log(category)
                return String(series.category)===String(category)
            }))
        } 
    },[category, serials])

    useEffect(()=>{
        getSeriesFilter()
    },[getSeriesFilter])

    return (
        <div>
            <div className={styles.verh}>
                <h1>Хроники Нарнии</h1>
                <div className={styles.info}>
                    <div className={styles.length}>
                        <i className="bi bi-clock-history"></i>
                        <p>2ч 30мин</p> 
                    </div>
                    <div className={styles.length}>
                        <i className="bi bi-calendar4"></i>
                        <p>08.11.2005</p>
                    </div>
                </div>
            </div>
            <ul className={styles.view}>
                {filter.map((item)=>
                    <li key={item.category} className={category===item.category?styles.active:''} 
                    onClick={()=>setCategory(item.category)}>{item.title}</li>
                )}
            </ul>
            
            <div className={styles.cards}> 
                <div className={styles.card_btn}><Link className={styles.btn} to={`/create`}>+</Link></div>
                {serials.length<1
                ?<Loading/>
                :serialsFilter.map((series)=>
                    <div key={series._id} className={styles.card}>
                        <img alt={series.title} src={series.cover}/>
                        <div className={styles.opis}>
                            <Link to={`/info/${series._id}`}><h1>{series.title}</h1></Link>
                            <p>{series.reating}</p>
                        </div>    
                    </div>
                )}    
            </div>
            <Paginated page={page} setPage={setPage} totalPage={totalPage}/>
        </div>
    );
};
export default Home