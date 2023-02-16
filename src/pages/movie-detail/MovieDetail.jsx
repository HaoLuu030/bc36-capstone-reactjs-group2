import React from 'react'
import Detail from './components/detail/Detail'
import PlayingFilm from './components/playingFilm/PlayingFilm'

export default function MovieDetail() {
    return (
        <div className='container'>
            <div className="col-12 mt-5">
                <Detail />
                <PlayingFilm />
            </div>
        </div>
    )
}
