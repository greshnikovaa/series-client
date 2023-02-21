import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from  './Create.module.css'
const API_URL = process.env.REACT_APP_API_URL

const dataSerials = {
  title: '',
  info: '',
  cover: '',
  reating: '',
  genre: '',
  year: '',
  country: '',
  category: '',
  actors: ''
}

const Create = () => {
    const [newSeries, setNewSeries] = useState(dataSerials)
  
    const onChange = (e)=>{
      setNewSeries({...newSeries, [e.target.name]: e.target.value})
    }
  
    const onSubmit = () =>{
      console.log(newSeries)
      axios.post(API_URL+'api/series/', newSeries)
      .then(res=>{
        alert("картина добавлена")
        setNewSeries(dataSerials)
      })
      .catch(err =>{
        console.log(err)
      })
    }
  
     return (
    <div className={styles.CreateSeries}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className="col-md-8 m-auto">
                <h1 className={styles.text_center}>Добавить картину</h1>
                <div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='название'
                      name='title'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.title}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='описание'
                      name='info'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.info}
                    />
                  </div>
  
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='ссылка на обложку'
                      name='cover'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.cover}
                    />
                  </div>
  
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='рейтинг'
                      name='reating'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.reating}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='жанр'
                      name='genre'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.genre}
                    />
                  </div>
  
  
                  <div className={styles.form_group}>
                    <input
                      type='date'
                      placeholder='год'
                      name='year'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.year}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='страна'
                      name='country'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.country}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='series/movie/cartoon'
                      name='category'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.category}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <input
                      type='text'
                      placeholder='актеры'
                      name='actors'
                      className='form-control'
                      onChange={onChange}
                      value={newSeries.actors}
                    />
                  </div>
                  <div className={styles.btns}>
                    <Link to="/" className={`${styles.btn} ${styles.btn_1}`}>
                      показать список 
                    </Link>
                    <button className={styles.btn} onClick={onSubmit}>
                        добавить картину
                    </button>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
     );
  };

export default Create