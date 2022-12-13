import React, { Component } from 'react'
import Footer from '../Footer'
import imgLast from '../../images/imgLast.png'

export default class Last extends Component {
    render() {
        return (
            <div className="last">
                <img src={imgLast} alt="ImagemLastPage"></img>
                <Footer />

            </div>
        )
    }
}
