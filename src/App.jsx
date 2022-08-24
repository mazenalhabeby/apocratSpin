import {useEffect, useState} from 'react'
import WheelComponent from './WheelComponent'

const containerW = document.getElementsByClassName('container')

function App() {
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState()

  useEffect(() => {
    const containerW = document.getElementById('container')?.clientWidth
    const containerH = document.getElementById('container')?.clientHeight

    setContainerWidth(containerW)
    setContainerHeight(containerH)

    function handleWindowResize() {
      setContainerWidth(containerW)
      setContainerHeight(containerH)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const [portal, setPortal] = useState()
  const segments = [
    'VAPIANO',
    'Mr. Wen',
    'Burgerista',
    'Apocrat',
    'Indian Food',
    'Subway',
    'dean&david',
    'Don',
    'LOsteria',
    'Front Food',
    'MyIndigo',
    'Glorious Bastards',
    'Myako Ramen',
    'Great',
    'Le Jardin',
    'Caffee Central',
  ]

  const weelColors = () => {
    let arr = []
    let colors = [
      '#571845',
      '#900c3e',
      '#c70039',
      '#ff5733',
      '#ffc300',
      '#003d57',
      '#524c85',
      '#0398a7',
    ]
    segments.forEach((el) => {
      let color = colors.shift()
      arr.push(color)
      colors.push(color)
    })

    return arr
  }
  const segColors = weelColors()

  console.log(segColors)

  const rand = () => {
    return setTimeout(() => {
      return segments[Math.floor(Math.random() * segments.length)]
    }, Math.floor(Math.random() * segments.length) * 1000)
  }

  const onFinished = (winner) => {
    setPortal(false)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("/images/foodBg.jpg")] bg-no-repeat bg-cover bg-center bg-slate-300/80 bg-blend-overlay'>
      <div
        id="container"
        className="w-full h-full overflow-hidden flex justify-center">
        <WheelComponent
          segments={segments.sort(function () {
            return 0.5 - Math.random()
          })}
          segColors={segColors}
          winningSegment={rand()}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#003a4c"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
        />
      </div>
    </div>
  )
}

export default App
