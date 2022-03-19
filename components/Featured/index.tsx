import { works } from "../../constants/works"
import s from './featured.module.scss'
import  classNames  from 'classnames';
import { useRouter } from "next/router";

export const Featured=():JSX.Element=>{
    const router=useRouter()
    return (
        <div className={classNames(s.featured,"container")}>
            <h2>Featured works</h2>
            <div className={s.items}>
                {
                    works.slice(0,3).map(ss=>(
                        <div 
                        onClick={()=>router.push("/work/"+ss.id)} 
                        key={ss.id} className={s.item}>
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