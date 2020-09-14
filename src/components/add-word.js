import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useStore } from './store'
import { v4 as uuid } from 'uuid'

const AddWord = () => {
    const [store, setStore] = useStore();

    function addWord() {
        let newestWord = { id: uuid(), value: '' };
        setStore({ 
            ...store, 
            words: [...store.words, newestWord],
            newestWord
        })
    }

    return (
        <button class="px-3 py-2 mx-1 text-3xl font-semibold text-indigo-500 hover:text-indigo-600 border-2 border-solid border-indigo-300 hover:border-indigo-500 bg-indigo-100 rounded transition-colors duration-150" onClick={addWord}>
            Add word or part
            <FontAwesomeIcon icon={faPlus} size="sm" className="ml-2 text-indigo-300" />
        </button>
    )
}

export default AddWord;