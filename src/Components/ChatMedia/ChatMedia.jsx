import React from 'react'
import { CustomSearch } from '../Chatlist/Chatlist'
import { 
    BsThreeDotsVertical
} from 'react-icons/all';


export default function ChatMedia() {
    return (
        <div className="col-md-3 p-4 mb-3 ">
            <div className="chat_profile">
                <div className="chat_profile_image">SP</div>
                <div className="chat_profile_name">Shubham Pandey</div>
                
            </div>
            <div className="border-bottom mt-3"></div>

            <div className="chat_screen_header">
                <div className="chat_profile_chat_name">
                    <p className=" chat_screen_title mt-2">Media</p>
                </div>
                <CustomSearch className="mt-2">
                    <BsThreeDotsVertical />
                </CustomSearch>
                
            </div>
        </div>
    )
}
