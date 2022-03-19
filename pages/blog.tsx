import MainLayout from "../components/Layout";
import  classNames  from 'classnames';
import s from '../styles/Blog.module.scss'
import { blogs } from './../constants/blogs';

export default function Blog(){
    return (
        <MainLayout title="Blog page">
           <div className={classNames(s.inner,"container")}>
           <h1 className={s.title}>Blog page</h1>
           <div className={s.items}>
               {
                   blogs.map(item=>(
                       <div key={item.id} className={s.item}>
                           <h3>{item.name}</h3>
                           <div>
                               <span>{item.data}</span>
                               <span>{item.desc}</span>
                           </div>
                           <p>{item.title}</p>
                       </div>
                   ))
               }
           </div>
           </div>
        </MainLayout>
    )
}