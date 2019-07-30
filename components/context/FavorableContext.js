import {createContext} from 'react';

const FavorableContext = createContext();
const FavorableConsumer = FavorableContext.Consumer;

export {FavorableConsumer};
export default FavorableContext;
