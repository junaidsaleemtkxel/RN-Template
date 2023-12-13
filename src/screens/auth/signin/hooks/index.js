import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';
import useUserStore from '../../../../zustandStore/store';

export function useHooks() {
  const {setUser} = useUserStore();
  const handleLogin = (email, password) => {
    setUser({
      email,
    });
    navigate(routes.app);
  };

  return {handleLogin};
}
