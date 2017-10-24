import Head from 'next/head'
import IntroForm from '../components/IntroForm'
import withMaterialUi from '../components/withMaterialUi'

const HomePage = () => (
  <div>
    <Head>
      <title>Three Card Flow</title>
    </Head>

    <IntroForm />
    <style jsx>{`
      div {
        padding: 0 15px;
        max-width: 1000px;
        margin: 0 auto;
        font-size: 2rem;
      }
    `}</style>
    <style jsx global>{`
      html {
        font-size: 10px;
      }
    `}</style>
  </div>
)

export default withMaterialUi(HomePage)
