import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../redux/currencySlice';

const CurrencySelector = () => {
  const dispatch = useDispatch();
  const currency = useSelector(state => state.currency.currency);

  return (
    <select value={currency} onChange={(e) => dispatch(changeCurrency(e.target.value))}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="UZS">UZS</option>
    </select>
  );
};

export default CurrencySelector;
