import React from 'react'
import './ChatBody.css'
import { BiSearch } from 'react-icons/all'
import { CustomSearch } from '../Chatlist/Chatlist'

export default function ChatBody() {
    return (
        <div className="col-md-5 p-4 mb-3  chat_screen">
            <div className="chat_screen_header">
                <div className="chat_profile_chat_image">SP</div>
                <p className="px-3 chat_screen_title">Shubham Pandey</p>
                <CustomSearch><BiSearch /></CustomSearch>
                
            </div>
            <div className="border-bottom mt-3"></div>
            <div className="mb-4"></div>
            
            <div className="chat_screen_chat_container">

                <div className="chat_screen_msg_left">
                    <div className="chat_screen_chat_profile">
                        SP
                    </div>
                    
                   <div className="chat_screen_chat_container_text ms-1">
                        <div className="chat_screen_chat_time mx-3 ">
                            Shubham Pandey, 11:11
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                            Lorem Ipsum.
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>
                

            </div>
        </div>
    )
}
