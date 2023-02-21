import React, {useState, useEffect} from 'react'
import styles from './UpdateSeriesInfo.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL




const UpdateSeriesInfo = () => {
const [series, setSeries] = useState({
  title:'',
  info:'',
  cover:'',
  reating:'',
  genre:'',
  year:'',
  country:'',
  category:'',
  actors:['']
})
const seriesId = useParams().id

const onChange = (e) =>{
  setSeries({...series, [e.target.name]: e.target.value})
}
const onSubmit = () =>{
  axios.put(API_URL+'api/series/' + seriesId, series)
  .then((res)=>{
    alert("Данные сериала изменены")

  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
  axios.get(API_URL+'api/series/' + seriesId)
  .then((res)=>{
    setSeries({...res.data, year:res.data.year.split('T')[0]})
  })
  .catch((err)=>{
    console.log(err)
  })
}, [seriesId])

   return (
      <div className={styles.updateSeriesInfo}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Изменить данные</h1>
              <div>
                <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='название'
                      name='title'
                      className='form-control'
                      onChange={onChange}
                      value={series?.title}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='описание'
                      name='info'
                      className='form-control'
                      onChange={onChange}
                      value={series?.info}
                    />
                  </div>
  
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='ссылка на обложку'
                      name='cover'
                      className='form-control'
                      onChange={onChange}
                      value={series?.cover}
                    />
                  </div>
  
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='рейтинг'
                      name='reating'
                      className='form-control'
                      onChange={onChange}
                      value={series?.reating}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='жанр'
                      name='genre'
                      className='form-control'
                      onChange={onChange}
                      value={series?.genre}
                    />
                  </div>
  
  
                  <div className={styles.form_group}>
                    <input
                      type='date'
                      placeholder='год'
                      name='year'
                      className='form-control'
                      onChange={onChange}
                      value={series?.year}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='страна'
                      name='country'
                      className='form-control'
                      onChange={onChange}
                      value={series?.country}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='сериал/фильм/мультфильм'
                      name='category'
                      className='form-control'
                      onChange={onChange}
                      value={series?.category}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='актеры'
                      name='actors'
                      className='form-control'
                      onChange={onChange}
                      value={series?.actors}
                    />
                 </div>
                <div className={styles.btns}>
                    <Link to="/" className={`${styles.btn} ${styles.btn_1}`}>
                      показать список 
                    </Link>
                    <button className={styles.btn} onClick={onSubmit}>
                        изменить картину
                    </button>
                </div>
        </div>
        </div>
        </div>

        </div>
    </div>
   );
};
export default UpdateSeriesInfo