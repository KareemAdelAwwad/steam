import React, { useState } from 'react';

import headerData from "@json/header.json";

// icons
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoMdSettings, IoMdAddCircleOutline } from "react-icons/io";

import { VscChromeClose, VscRemove, VscChromeRestore } from "react-icons/vsc";
import { FaBell } from "react-icons/fa";
import { MdPeople, MdMarkEmailRead } from "react-icons/md";

import logo from "@public/H-Logo.png"
import profile from "@public/profile.jpg"


const ClientNav = () => {
  const navLinks = headerData.navLinks;

  const [friendsVisible, setFriendsVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [userVisible, setUserVisible] = useState(false);

  const toggleVisibilityfriends = () => {
    setNotificationsVisible(false)
    setUserVisible(false)
    setFriendsVisible(!friendsVisible);
  };
  const toggleVisibilitynotifications = () => {
    setFriendsVisible(false)
    setUserVisible(false)
    setNotificationsVisible(!notificationsVisible);
  };
  const toggleVisibilityuser = () => {
    setFriendsVisible(false)
    setNotificationsVisible(false)
    setUserVisible(!userVisible);
  };

    return (
    <nav className="bg-[#0E141B] h-[59px] px-[20px] flex justify-between items-center">
      <div className="logoAndMainLinks flex items-center">
        <div className="icons flex gap-[13px]" >
          <IoIosArrowBack size={"17px"} color="#767f8b"/>
          <IoIosArrowForward size={"17px"} color="#767f8b"/>
        </div>
        <div className="logoAndLinks flex items-center gap-[30px] mx-[20px]">
          <img className="h-[22px]" src={logo}/>
          <ul className="flex gap-[80px]">
            {
              navLinks.map((navLink, index) => (
                <li key={index} className="text-[#f1f4f4] uppercase text-[15px] font-bold">
                  {(index == 0) ? <a className="text-[#76bbe3]" href={navLink.href}>{navLink.label}</a> : <a href={navLink.href}>{navLink.label}</a>}
                </li>
              ))
            }
          </ul>
        </div>
      </div>



      <div className="infoUser flex items-center gap-[10px]">
        <div className="friends flex items-center" onClick={toggleVisibilityfriends}>
          <div className="icon w-[60px] h-[35px] flex justify-center items-center bg-[#1e2329] rounded-md relative before:content-[attr(number)] before:absolute before:w-[20px] before:h-[20px] before:bg-primary before:rounded-full before:text-[#333] before:flex before:justify-center before:items-center before:text-[10px] before:font-bold before:top-[-5px] before:right-[-3px]" number='+9'>
            <MdPeople size={"20px"} color="rgb(118, 127, 140)"/>
          </div>
          {
            friendsVisible && 
              <div className='absolute bg-[#1e2329] top-[50px] w-[350px] p-[30px] rounded-md'>
                <div className="friendsList ">
                  <div className="myStatus flex justify-between items-center w-full">
                    <div className="imageAndNameAndStatus flex gap-4">
                      <div className="image border-2 border-[#ddd] border-solid">
                        <img src={profile} alt="profile" width={40} />
                      </div>
                      <div className="nameAndStatus flex flex-col justify-start">
                        <h3 className='text-[18px] font-bold'>kareem_adel</h3> 
                        <p className='flex pl-[20px] items-center gap-2 text-primary mt-1 relative before:absolute before:w-[10px] before:h-[10px] before:bg-primary before:rounded-full before:left-0 before:top-[50%] before:translate-y-[-50%] text-[12px]'>Online <IoIosArrowDown color='#aaa'/></p>
                      </div>
                    </div>

                    <div className="addAccount">
                      <IoMdAddCircleOutline fontSize={23} color='#aaa'/>
                    </div>
                  </div>
                  

                  <div className="tabs mt-[30px]">
                    <div className="tab-box flex justify-between items-center gap-[2%]">
                      <div className="tab-btn bg-[#313743] w-[49%] rounded-t-lg h-[40px] text-center leading-[40px] text-[#ddd]">Friends</div>
                      <div className="tab-btn bg-[#0d141c] w-[49%] rounded-t-lg h-[40px] text-center leading-[40px] text-[#999]">Activity</div>
                    </div>
                    <div className="content-box rounded-b-lg bg-[#313743] max-h-[200px] overflow-y-auto">
                      <div className="content active p-[20px]">
                        <div className="online">
                          <p className='text-[#888] mb-[20px]'>online (3)</p>
                          <div className="imageAndNameAndStatus flex gap-4 mb-[15px]">
                            <div className="image border-2 border-[yellow] border-solid">
                              <img src={profile} alt="profile" width={40} />
                            </div>
                            <div className="nameAndStatus flex flex-col justify-start">
                              <h3 className='text-[18px] font-bold'>kareem_adel</h3> 
                              <p className='flex items-center gap-2 text-[yellow] mt-1'>Game one </p>
                            </div>
                          </div>
                          <div className="imageAndNameAndStatus flex gap-4 mb-[15px]">
                            <div className="image border-2 border-[red] border-solid">
                              <img src={profile} alt="profile" width={40} />
                            </div>
                            <div className="nameAndStatus flex flex-col justify-start">
                              <h3 className='text-[18px] font-bold'>kareem_adel</h3> 
                              <p className='flex items-center gap-2 text-[red] mt-1'>Game two </p>
                            </div>
                          </div>
                        </div>
                        <div className="offline">
                          <p className='text-[#888] mb-[20px]'>offline (3)</p>
                          <div className="imageAndNameAndStatus flex gap-4 mb-[15px]">
                            <div className="image border-2 border-[#666] border-solid">
                              <img src={profile} alt="profile" width={40} />
                            </div>
                            <div className="nameAndStatus flex flex-col justify-start">
                              <h3 className='text-[18px] font-bold text-[#666]'>kareem_adel</h3> 
                              <p className='flex items-center gap-2 text-[#666] mt-1'>offline </p>
                            </div>
                          </div>
                          <div className="imageAndNameAndStatus flex gap-4 mb-[15px]">
                            <div className="image border-2 border-[#666] border-solid">
                              <img src={profile} alt="profile" width={40} />
                            </div>
                            <div className="nameAndStatus flex flex-col justify-start">
                              <h3 className='text-[18px] font-bold text-[#666]'>kareem_adel</h3> 
                              <p className='flex items-center gap-2 text-[#666] mt-1'>offline </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content ">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>


        <div className="notification flex items-center relative" onClick={toggleVisibilitynotifications}>
          <div className="icon w-[60px] h-[35px] flex justify-center items-center bg-[#1e2329] rounded-md relative before:content-[attr(number)] before:absolute before:w-[20px] before:h-[20px] before:bg-primary before:rounded-full before:text-[#333] before:flex before:justify-center before:items-center before:text-[10px] before:font-bold before:top-[-5px] before:right-[-3px]" number='4'>
            <FaBell size={"20px"} color="rgb(118, 127, 140)"/>
          </div>
          {notificationsVisible && 
            <div className='absolute bg-[#1e2329] top-[50px] w-[350px] p-[30px] rounded-md'>
              <div className="headingAndIcons flex justify-between">
                <div className="heading">
                  <h3 className="text-[15px] text-[#f1f4f4] font-bold tracking-[1.5px]">Notifications</h3>
                </div>
                <div className="icons flex gap-[10px]">
                  <MdMarkEmailRead size={"20px"} color="rgb(118, 127, 140)"/>
                  <IoMdSettings size={"20px"} color="rgb(118, 127, 140)"/>
                </div>
              </div>
              <div className="boxes mt-[30px]">
                <div className="box bg-[#171c22] rounded-md mt-[10px] p-[15px]">
                  <div className="fromWhere w-[100%] flex items-center gap-[4px] text-[#76808b] text-[13px] relative after:content after:absolute after:bg-primary after:w-[10px] after:h-[10px] after:rounded-full after:right-0">
                    <MdPeople /> community
                  </div>
                  <div className="message text-[11px] mt-[10px] font-thin text-[#ddd]"><a href="" className='text-primary'>Your Friend</a> left a comment on your profile.</div>
                </div>
                <div className="box bg-[#171c22] rounded-md mt-[10px] p-[15px]">
                  <div className="fromWhere w-[100%] flex items-center gap-[4px] text-[#76808b] text-[13px]">
                    <MdPeople /> community
                  </div>
                  <div className="message text-[11px] mt-[10px] font-thin text-[#ddd]"><a href="" className='text-primary'>Your Friend</a> left a comment on your profile.</div>
                </div>
              </div>
          </div>}

        </div>
        <div className="user flex items-center relative" onClick={toggleVisibilityuser}>
          <div className="icon px-[10px] h-[35px] flex justify-between items-center bg-[#1e2329] rounded-md gap-[10px]">
            <div className="profileImage h-[100%] flex items-center justify-center">
              <img src={profile} className="h-[25px] rounded-sm"/>
            </div>
            <div className="name">
              <p className="text-[12px]">kareem_adel</p>
            </div>
            <div className="moneyWallet">
              <p className="text-[12px] text-[#778089]">1000.99$</p>
            </div>
            <div className="iconDropDown">
              <IoIosArrowDown />
            </div>
          </div>
            {userVisible && 
              <div className='absolute bg-[#1e2329] top-[50px] w-[100%] rounded-md'>
                <ul className='text-[#ddd] text-[14px]'>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Account Details</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Wallet</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Settings</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Client Updates</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Go Offline</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Change Account</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Sign Out</a></li>
                  <li className='hover:bg-[#313743] p-[15px] rounded-md'><a href="#">Exit</a></li>
                </ul>
            </div>}
        </div>
        <div className="iconsAndLinks flex items-center ml-[50px]">
            <div className="links flex text-[#767f8b] text-[13px] capitalize">
              <ul className="flex gap-[15px]">
                <li><a href="#">help</a></li>
                <li><a href="#" className="flex items-center">view <IoIosArrowDown /></a></li>
              </ul>
            </div>
            <div className="icons flex gap-[15px] ml-[15px]">
              <VscRemove size={"20px"} color="#767f8b"/>
              <VscChromeRestore size={"20px"} color="#767f8b"/>
              <VscChromeClose size={"20px"} color="#767f8b"/>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default ClientNav
