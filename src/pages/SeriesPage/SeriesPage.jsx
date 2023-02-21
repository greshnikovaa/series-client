import React, {useEffect, useState} from 'react'
import styles from './SeriesPage.module.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

const SeriesPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [series, setSeries] = useState(null)
    useEffect(()=>{
        axios.get(API_URL+'api/series/'+ id)
            .then((res)=>{
                console.log(res.data)
                setSeries(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id])
    if(series===null){
        return <h1>loading...</h1>
    }
    const deleteSeries = (id) =>{
        axios.delete(API_URL+'api/series/'+ id)
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{series.title}</h1>
            <div className={styles.verh}>
                <img className={styles.left} alt={series.title} src={series.cover}/>
                <div className={styles.right}>
                    <ul className={styles.info}>
                        <li>Рейтинг: {series.reating}</li>
                        <li>Жанр: {series.genre}</li>
                        <li>Год: {series.year.split('T')[0].split('-').join('.')}</li>
                        <li>Страна: {series.country}</li>
                        <li>Категория: {series.category}</li>
                        <li>Актеры: {series.actors.join(', ')}</li>
                    </ul>
                {/* <div> */}
                    <div className={styles.option}>
                        <button className={styles.btn}>Смотреть </button> 
                        <button className={`${styles.btn} ${styles.change}`}><Link to={`/edit/${series._id}`}><i className="bi bi-pencil-square"></i></Link></button>
                        <button onClick={() => deleteSeries(series._id)} className={`${styles.btn} ${styles.delete}`}><i className="bi bi-trash3"></i></button>
                    </div>    
                </div>    
            </div>  
            {/* </div>   */}
            <h1 className={styles.opis}>Описание</h1>
            <p className={styles.opisanie}>{series.info}</p>      
        </div>
    );
};
export default SeriesPage