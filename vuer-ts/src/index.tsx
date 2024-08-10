import { createContext, PropsWithChildren, useContext } from 'react';
import { Helmet, HelmetProvider } from '@vuer-ai/react-helmet-async';

const simpleContext = createContext({ value: false });
export const SimpleProvider = ({ children }: PropsWithChildren) => {
  return <simpleContext.Provider value={{ value: true }}>
    {children}
  </simpleContext.Provider>;

};
export const useSimple = () => {
  // return useContext(simpleContext);
};

export const SimpleComponent = () => {

  // const simple = useSimple();

  return <div>
    <Helmet>
      <title>Simple Component</title>
    </Helmet>
    <h1>Simple Component</h1>
    {/*<p>simple value is: {simple.value}</p>*/}
  </div>;
};