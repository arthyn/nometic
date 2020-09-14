import { h } from 'preact';
import AddWord from '../../components/add-word';
import Word from '../../components/word';
import { useStore } from '../../components/store';

const Home = () => {
	const [store] = useStore();

	return (
		<section class="flex justify-center items-center h-full w-full py-12 px-8">
			<div class="flex">
				{store.words.map(word => (
					<Word {...word} shouldFocus={word.id === store.newestWord.id} />
				))}
				<AddWord />
			</div>
		</section>
	)
}

export default Home;
