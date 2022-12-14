import {clients} from '../contants'
import styles from '../style'

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client,index)=>(
          <div key={client.id} className={`flex-1 brands ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className={`sm:w-[192px] w-[100px] object-contain mb-2`} />
          </div>
        ))}

      </div>

    </section>
  )

export default Clients