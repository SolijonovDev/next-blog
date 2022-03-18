import { works } from "../../constants/works"
import s from './featured.module.scss'
import  classNames  from 'classnames';

export const Featured=():JSX.Element=>{
    return (
        <div className={classNames(s.featured,"container")}>
            <h2>Featured works</h2>
            <div className={s.items}>
                {
                    works.map(ss=>(
                        <div className={s.item}>
                            <img src={ss.img.src} alt="logo" />
                            <div className={s.text}>
                              <h5>{ss.skill}</h5>
                              <div>
                                  <div>{ss.year}</div>
                                  <span>{ss.skill}</span>
                              </div>
                              <p>{ss.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}