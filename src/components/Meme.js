import memesData from "../memesData"

export default function Meme(props) {
    // function handleClick() {
    //     console.log('a random url')
    // }
    function getMemeImage() {
        // console.log('clicked')
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        // const url = memesArray[randomNumber].url
        const {url} = memesArray[randomNumber]
        console.log({url})
    }

    return (
        <main>
            <div className='form'>
                <input 
                    type='text' 
                    placeholder='Top text' className='form--input'
                />
                <input 
                    type='text'
                    placeholder='Bottom text' className='form--input'
                />
                {/* <button onClick={handleClick}>rplease click</button> */}
                <button 
                    className='form--button'        type='button'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {/* <div className='meme--image'>
                <img src={`./assets/${props.data.memes.url}`} alt='randomly generated meme' />
            </div> */}
        </main>
        
    )
}