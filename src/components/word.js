import { h } from 'preact'
import { useRef, useEffect } from 'preact/hooks'
import { measureDomNode } from '../utils/measure-dom-node';
import { useStore } from './store'

function measureWord(value) {
    const word = document.createElement('span');
    word.className = 'text-3xl'
    word.textContent = value;

    return measureDomNode(word);
}

const Word = ({ value, id, shouldFocus }) => {
    const [store, setStore] = useStore();
    const input = useRef();
    const inputId = `word-${id}`;
    const { width } = measureWord(value);

    useEffect(() => {
        if (shouldFocus)
            input.current.focus();
    }, [shouldFocus, input])

    function handleChange(event) {
        let words = store.words;
        let word = words.filter(word => word.id === id)[0];
        word.value = event.target.value;
        words.splice(words.indexOf(word), 1, word);

        if (word)
            setStore({...store, words })
    }

    return (
        <label htmlFor={inputId} class="mx-1">
            <span class="sr-only">{ value ? value : 'word or part'}</span>
            <input ref={input} id={inputId} type="text" value={value} class="min-w-6 h-full px-2 text-center text-3xl hover:text-indigo-500 focus:text-indigo-500 bg-transparent hover:bg-indigo-100 focus:bg-indigo-100 border-2 border-solid border-indigo-100 hover:border-indigo-300 focus:border-indigo-300 rounded transition-colors" style={{ width: `calc(1rem + 4px + ${width}px)` }} onChange={handleChange} />
        </label>
    )
}

export default Word;