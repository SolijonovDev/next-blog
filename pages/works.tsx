import MainLayout from "../components/Layout";
import s from '../styles/Works.module.scss'
import { works } from './../constants/works';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function Works() {
    const router = useRouter()
    return (
        <MainLayout title="Work page">
            <div className={classNames(s.works, "container")}>
                <h2 className={s.title}>Works page</h2>
                <div className={s.items}>
                    {
                        works.map(ss => (
                            <div
                                onClick={() => router.push("/work/" + ss.id)}
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
        </MainLayout>
    )
}