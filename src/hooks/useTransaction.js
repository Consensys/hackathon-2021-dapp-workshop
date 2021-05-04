import { useAppContext } from '../AppContext';

const useTransaction = () => {
  const { setTxnStatus, txnStatus } = useAppContext();
  return { setTxnStatus, txnStatus };
};

export default useTransaction;
