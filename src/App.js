import Header from './components/Header'
import Meme from './components/Meme'
import data from './memesData'

export default function App() {
  	// const memes = data.memes.map(meme => {
	// 	return (
	// 		<Meme
	// 			key={meme.id}
	// 			{...meme}
	// 		/>
	// 	)
  	// })

	return (
		<div className="App">
			<Header />
			<Meme />
			{/* <div className='meme--image'>
				{memes}
			</div> */}
		</div>
	)
}