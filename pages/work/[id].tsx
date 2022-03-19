import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import  classNames  from 'classnames';
import s from '../../styles/Work.module.scss'

export default function Work() {
    const { query } = useRouter()
    return (
        <Layout title="Work page">
            <div className={classNames('container',s.inner)}>
                Work id:{query.id}
            </div>
        </Layout>
    )
}