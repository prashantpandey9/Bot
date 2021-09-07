import React from 'react'
import './ChatBody.css'
import { BiSearch } from 'react-icons/all'
import { CustomSearch } from '../Chatlist/Chatlist'

export default function ChatBody() {
    return (
        <div className="col-md-5 p-4 mb-3  chat_screen">
            <div className="chat_screen_header">
                <div className="chat_profile_chat_image">DT</div>
                <p className="px-3 chat_screen_title">Design Team</p>
                <CustomSearch><BiSearch /></CustomSearch>
                
            </div>

            <div className="border-bottom mt-3"></div>
            <div className="mb-5 pb-5"></div>
            
        </div>
    )
}
