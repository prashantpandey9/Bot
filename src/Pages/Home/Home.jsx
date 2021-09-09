import React from 'react'
import LeftNav from '../../Components/LeftNav/LeftNav'
import Chatlist from '../../Components/Chatlist/Chatlist'
import ChatBody from '../../Components/ChatBody/ChatBody'
import ChatMedia from '../../Components/ChatMedia/ChatMedia'

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row no-gutters mt-3">
                <LeftNav />
                <Chatlist />
                <ChatBody />
                <ChatMedia />
            </div>
        </div>
    )
}
