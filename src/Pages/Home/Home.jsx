import React from 'react'
import LeftNav from '../../Components/LeftNav/LeftNav'
import Chatlist from '../../Components/Chatlist/Chatlist'

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row no-gutters">
                <LeftNav />
                <Chatlist />

            </div>
        </div>
    )
}
