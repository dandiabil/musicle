import ReactDOM from 'react-dom';
import { useAppContext } from '../../context'
import SpinnerLoading from './spinner';

const ModalRenderer = () => {
  const { showSpinner } = useAppContext();

  if(showSpinner){
    return ReactDOM.createPortal(<SpinnerLoading />, document.getElementById('modal'));
  }

  return null;
}

export default ModalRenderer