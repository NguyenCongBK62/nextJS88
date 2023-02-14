import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import 'antd/dist/reset.css'
import MyLayout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
  )
}
