import React from 'react'
import About from './About'
import Metrics from './Metrics'
import Summary from './Summary'

const Content = () => {
    return (
        <div className='content'>
            <Summary />
            <Metrics />
            <About />
        </div>
    )
}

export default Content
