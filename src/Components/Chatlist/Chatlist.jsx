import React from 'react'
import './Chatlist.css'
import { 
    AiOutlineCheckCircle, 
    BiSearch, 
    BsThreeDotsVertical,
    BiChevronDown
} from 'react-icons/all'
import styled from 'styled-components'

const Customcheck = styled(AiOutlineCheckCircle)`
color: var(--icons);
`
export const  CustomSearch = styled('div')`
    color: var(--font-white);
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
    const chatlist = [
        {
            "short_name": "SP",
            "name": "Shubham Pandey",
            "typing": true,
            "time": "11:11",
        },
        {
            "short_name": "AB",
            "name": "Ayush Bisht",
            "typing": false,
            "time": "9:13",
        },
        {
            "short_name": "RT",
            "name": "Rajat Tiwari",
            "typing": true,
            "time": "9:13",
        },
        {
            "short_name": "KT",
            "name": "Kriti Tripathi",
            "typing": false,
            "time": "11:15",
        },
        {
            "short_name": "PA",
            "name": "Pooja Agarwal",
            "typing": true,
            "time": "11:15",
        },
        {
            "short_name": "RJ",
            "name": "Raghav Juyal",
            "typing": false,
            "time": "11:15",
        },
        {
            "short_name": "DP",
            "name": "Drishti Pant",
            "typing": true,
            "time": "11:15",
        }
    ]

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
                {chatlist.map((e, index)=>(
                    <div className={`chat_chat_profile ${index===0? "active_chat_chat_profile": ""}`} key={index}>
                        <div className="chat_profile_chat_image">{e.short_name}</div>
                        <p className="recent_chat_profile_name ps-3 m-0">
                            <span>{e.name}</span>
                            <span className="chat_chat_profile_typing">{e.typing? "typing...":"🤣🤣🤣"}</span>
                        </p>
                        
                        <span className="chat_chat_profile_time">{e.time}</span>
                    </div>
                ))}
            </div>
            <div className="scroll_down m-auto mt-1">
                <BiChevronDown className=""/>
            </div>


        </div>
    )
}
