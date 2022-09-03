/* Higher-Order Components used as wrapper for component testing  */
import { Provider } from 'react-redux';
import { store } from './redux/store';

interface IComponentProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element,
}

export const TestHOC = (props:IComponentProps) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};
