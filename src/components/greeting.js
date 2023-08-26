import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/messageSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.message);
  return (
    <>
      <div>
        <h1>Greetings</h1>
        <p>{message.greeting}</p>
        <button type="button" onClick={() => dispatch(fetchMessage())}>New Greeting</button>
      </div>

    </>
  );
}
