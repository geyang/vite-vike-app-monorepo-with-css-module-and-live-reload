import { createContext, PropsWithChildren, useContext } from 'react';
import { Helmet } from '@vuer-ai/react-helmet-async';

const simpleContext = createContext({ value: false });

export const SimpleProvider = ({ children }: PropsWithChildren) => {
  return <simpleContext.Provider value={{ value: true }}>
    {children}
  </simpleContext.Provider>;

};
export const useSimple = () => {
  return useContext(simpleContext);
};

export const SimpleComponent = () => {

  const simple = useSimple();

  console.log('simple', simple);

  return <div>
    <Helmet>
      <title>Simple Change Wow this works</title>
    </Helmet>
    <h1>Simple Component</h1>
    <p>
      simple value is: {simple?.value ? 'this is amazing' : 'false'}
    </p>
  </div>;
};