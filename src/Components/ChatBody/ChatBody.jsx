import React from 'react'
import './ChatBody.css'
import { BiSearch } from 'react-icons/all'
import { CustomSearch } from '../Chatlist/Chatlist'
import { 
    BiSmile,
    AiOutlinePaperClip,
    FaPaperPlane
} from 'react-icons/all';

export default function ChatBody() {
    return (
        <div className="col-md-5 p-3 mb-3  chat_screen">
            <div className="chat_screen_header">
                <div className="chat_profile_chat_image">SP</div>
                <div className="chat_profile_chat_name">
                    <p className="px-3 chat_screen_title m-0">Shubham Pandey</p>
                    <p className="px-3 chat_screen_title">typing...</p>
                     
                </div>
                <CustomSearch>
                    <BiSearch />
                </CustomSearch>
                
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
                        🔥🤣
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>

                <div className="chat_screen_msg_right">
                    <div className="chat_screen_chat_profile">
                        PP
                    </div>
                    
                   <div className="chat_screen_chat_container_text me-1">
                        <div className="chat_screen_chat_time ms-auto  mx-2">
                            Prashant Pandey Pandey, 11:45
                        </div>
                        <div className="chat_screen_chat_text ms-auto  mx-2 my-1">
                            🤣🤣🤣🤣🤣🤣🤣
                        </div>
                        <div className="chat_screen_chat_text ms-auto  mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>
                <div className="chat_screen_msg_left">
                    <div className="chat_screen_chat_profile">
                        SP
                    </div>
                    
                   <div className="chat_screen_chat_container_text ms-1">
                        <div className="chat_screen_chat_time mx-3 ">
                            Shubham Pandey, 11:11
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                            Okay.
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>

                <div className="chat_screen_msg_right">
                    <div className="chat_screen_chat_profile">
                        PP
                    </div>
                    
                   <div className="chat_screen_chat_container_text me-1">
                        <div className="chat_screen_chat_time ms-auto  mx-2">
                            Prashant Pandey Pandey, 11:45
                        </div>
                        <div className="chat_screen_chat_text ms-auto  mx-2 my-1">
                            Okay.
                        </div>
                        <div className="chat_screen_chat_text ms-auto  mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>
                <div className="chat_screen_msg_left">
                    <div className="chat_screen_chat_profile">
                        SP
                    </div>
                    
                   <div className="chat_screen_chat_container_text ms-1">
                        <div className="chat_screen_chat_time mx-3 ">
                            Shubham Pandey, 11:11
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                            Okay.
                        </div>
                        <div className="chat_screen_chat_text mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>

                <div className="chat_screen_msg_right">
                    <div className="chat_screen_chat_profile">
                        PP
                    </div>
                    
                   <div className="chat_screen_chat_container_text me-1">
                        <div className="chat_screen_chat_time ms-auto  mx-2">
                            Prashant Pandey Pandey, 11:45
                        </div>
                        <div className="chat_screen_chat_text ms-auto  mx-2 my-1">
                            Okay.
                        </div>
                        <div className="chat_screen_chat_text ms-auto  mx-2 my-1">
                        Lorem Ipsum is simply dummy text of the printing.
                        </div>
                   </div>

                </div>
            </div>
            
            <div className="chat_screen_typing_space mt-4 p-1">
                <input 
                    className="chat_screen_typing_space_input"
                    type="text" 
                    placeholder="Write your message..."
                />
                <div className="icon_styles mx-1">
                    <BiSmile />
                </div> 
                <div className="icon_styles mx-1">
                    <AiOutlinePaperClip />
                </div>   
                <div className="icon_styles mx-1 active_icon">
                    <FaPaperPlane />
                </div> 
                </div>
        </div>
    )
}
