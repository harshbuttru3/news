import React, { Component } from 'react'
import loading from './loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <h3 className="text-center text-info">Fetching News across the </h3>
        <img className='w-25' src={loading} alt='loading'/>
      </div>
    )
  }
}

export default spinner
