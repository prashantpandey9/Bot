import React from 'react'
import { CustomSearch } from '../Chatlist/Chatlist'
import { 
    BsThreeDotsVertical,
    IoImagesOutline,
    AiOutlinePlayCircle,
    BiChevronDown
} from 'react-icons/all';
import './ChatMedia.css'

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
            <div className="chat_media_media mt-2">
                <div className="chat_media_image">
                    <IoImagesOutline 
                        className="chat_media_icon me-2"
                    />
                    Images
                </div>
                <div className="chat_media_image">
                    <AiOutlinePlayCircle 
                        className="chat_media_icon me-2"
                    />
                    Videos
                    
                </div>
            </div>

            <div className="chat_screen_header mt-2">
                <div className="chat_profile_chat_name">
                    <p className=" chat_screen_title mt-2">Attachments</p>
                </div>
                <CustomSearch className="mt-2">
                    <BsThreeDotsVertical />
                </CustomSearch>
                
            </div>

            <div className="chat_media_attach">
                <div className="chat_media_attach_contain mt-3">
                    <div className="chat_media_media_icon me-4">
                        PDF
                    </div>
                    <p className="my-auto ">
                        Compititor Analysis Template
                    </p>
                </div>
                <div className="chat_media_attach_contain mt-3">
                    <div className="chat_media_media_icon me-4">
                        ZIP
                    </div>
                    <p className="my-auto">
                        How to create a case study?
                    </p>
                </div>
                <div className="chat_media_attach_contain mt-3">
                    <div className="chat_media_media_icon me-4">
                        XL
                    </div>
                    <p className="my-auto">
                        Project Documents
                    </p>
                </div>
            </div>
            
            <div className="scroll_down m-auto mt-4">
                <BiChevronDown className=""/>
            </div>
        </div>
    )
}
