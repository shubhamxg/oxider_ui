import { CounterBox } from "../CounterBox/CounterBox"
import './styles.css';
const StripeKeyCard = () => {
  return (
    <div className="stripe-card">
      <CounterBox clabel="Test" bcolor="grey" />
      <CounterBox clabel="Dead" bcolor="blue" />
      <CounterBox clabel="Errors" bcolor="red" />
      <CounterBox clabel="Live" bcolor="green" />
    </div>
  )
}

export default StripeKeyCard