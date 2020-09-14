import { createContext } from 'preact'
import { useContext, useState } from 'preact/hooks'

const initStore = {
    words: [],
    newestWord: null
}

export const StoreContext = createContext([initStore, () => {}]);

export const useStore = () => useContext(StoreContext);

const Store = ({ children }) => {
    const [store, setStore] = useState(initStore);

    return (
        <StoreContext.Provider value={[store, setStore]}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store;