import style from  './Home.module.css'
import AMovie from '../Movies/Movies'
import CMovie from '../Comedy/Comedy'
import HMovie from '../Horror/Horror'
export default function Home() {
  return  <>
     <div className="mt-5 p-5 bg-dark text-center">
          <h1 className={`text-white mb-4  ${style.mm} d-flex <img src={logo} className='w-25 h-25'/> justify-content-center align-items-center m-auto p-4  w-75 border rounded-5`}>All Movies</h1>
          
          <div>
            <AMovie/>
            <div className='border border-1'></div>
            <CMovie/>
            <div className='border border-1'></div>
            <HMovie/>
          </div>
      </div>
  </>
  
}
