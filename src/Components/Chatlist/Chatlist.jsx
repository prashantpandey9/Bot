import React from 'react'
import './Chatlist.css'
import { AiOutlineCheckCircle, BiSearch, BsThreeDotsVertical } from 'react-icons/all'
import styled from 'styled-components'

const Customcheck = styled(AiOutlineCheckCircle)`
color: var(--icons);
`
const CustomSearch = styled('div')`
    color: #fff;
    width: 40px;
    height: 40px;
    align-items: center; 
    justify-content: center;
    display: flex;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover{
        background-color: var(--gunmetal);
    }
`

export default function Chatlist() {
    return (
        <div className="col-md-3 p-4 m-0">
            <div className="chatlist_profile mt-3">
                <p className="m-0">Chats</p>
                <div className="mb-5 pb-5"></div>
                
            </div>
            <div className="border-bottom"></div>

            <div className="chat_profile">
                <div className="chat_profile_image">PP</div>
                <div className="chat_profile_name">Prashant Pandey</div>
                <div className="chat_profile_status">
                    <div className="chat_profile_status_active m-auto"></div>
                    <span className="px-1">Available</span>
                    <Customcheck />

                    <span className="chat_profile_status_true"></span>
                </div>
            </div>

            <div className="recent_chat_profile">
                <p className="recent_chat_profile_text">Recent chats</p>
                
                <CustomSearch>
                    <BiSearch />
                </CustomSearch>
                    
                <CustomSearch>
                    <BsThreeDotsVertical />
                </CustomSearch>

            </div>
            <div className="chat_list_container">
                {[...Array(6)].map(()=>(
                    <div className="chat_chat_profile">
                        <div className="chat_profile_chat_image">PP</div>
                        <p className="recent_chat_profile_name ps-3 m-0">
                            <span>Ayush Bisht</span>
                            <span className="chat_chat_profile_typing">typing...</span>
                        </p>
                        
                        <span className="chat_chat_profile_time">11:15</span>
                    </div>
                ))}
            </div>
            


        </div>
    )
}
