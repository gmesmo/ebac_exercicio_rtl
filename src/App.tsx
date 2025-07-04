import Post from './components/Post'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl='https://cdn.awsli.com.br/2500x2500/764/764222/produto/80280635/13c3a01def.jpg'>
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  )
}

export default App
