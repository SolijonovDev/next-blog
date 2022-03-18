import classNames from 'classnames'
import photo from '../../utilits/photo.png'
import s from './header.module.scss'

export const Header = (): JSX.Element => {
    return (
        <div className={classNames(s.header,"container")}>
            <div className={s.text}>
                <h1 className={s.title}>
                    Hi, I am John,
                    Creative Technologist
                </h1>
                <p className={s.desc}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className={s.btn}>
                    Download Resume
                </button>
            </div>
            <div className={s.photo}>
                <img src={photo.src} alt="photo" />
            </div>
        </div>
    )
}