import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className = { styles.title }>Home for Ninja!</h1>
      <p className = { styles.text }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Adipiscing diam donec adipiscing tristique risus nec feugiat. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Quis 
        ipsum suspendisse ultrices gravida dictum fusce ut. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus 
        commodo viverra maecenas accumsan lacus vel. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Penatibus et 
        magnis dis parturient montes nascetur ridiculus mus mauris. Et ligula ullamcorper malesuada proin libero nunc. Cras pulvinar 
        mattis nunc sed. Quis blandit turpis cursus in hac habitasse platea. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. 
        Ornare arcu dui vivamus arcu felis bibendum ut. Eros in cursus turpis massa tincidunt dui ut ornare lectus.
      </p>
      <Link href = "/ninja">
        <a className = { styles.btn }>View Ninja List</a>
      </Link>
    </div>
  )
}