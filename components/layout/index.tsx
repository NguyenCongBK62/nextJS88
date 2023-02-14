import style from '@/components/layout/style.module.scss'
import Logo from '@/public/ww.webp'
import { Layout } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
const { Header, Content, Footer } = Layout
export default function MyLayout(props: any) {
  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Header className={style.header}>
        <div className={style.navigation}>
          <Image src={Logo} alt="" height={60} />
          <div className={style.logoTitle}>
            <span>Todo App</span>
          </div>
        </div>
        <div className={style.rout}>
          <div className={style.listTodo}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              Todo List
            </Link>
          </div>
        </div>
      </Header>
      <Content className={style.content}>{props.children}</Content>
    </Layout>
  )
}
