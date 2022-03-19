import classNames from 'classnames'
import { posts } from '../../constants/posts'
import s from './recent.module.scss'

export const RecentPosts = (): JSX.Element => {
    return (
        <div className={s.recent}>
            <div className={classNames(s.inner, "container")}>
                <div className={s.top}>
                    <h2>Recent posts</h2>
                    <button>View all</button>
                </div>
                <div className={s.items}>
                    {
                        posts.map(item => (
                            <div key={item.id} className={s.item}>
                                <h3>
                                    {item.name}
                                </h3>
                                <div>
                                    <span>{item.data}</span>
                                    <span>{item.text}</span>
                                </div>
                                <p>
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}