import { cardsData, groupNumber } from '../../../data';
import css from './Dashboard.module.css';
import Statistics from '../../Statistics/Statistics';
import Orders from '../../Orders/Orders';

const Dashboard = () => {
  return <div className={css.container}>

    {/* lado izquierdo */}
    <div className={css.dashboard}>
      
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>Tablero</span>

          <div className={css.durationButton}>
            <select>
              <option value="">1 semana</option>
              <option value="">1 mes</option>
              <option value="">1 año</option>
            </select>
          </div>
        </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index)=> (
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
      </div>

      <Statistics/>

    </div>

      <Orders/>
  </div>
}

export default Dashboard;