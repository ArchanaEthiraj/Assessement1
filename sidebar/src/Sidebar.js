import React from 'react'
import './Sidebar.css'
import { IoIosHome } from "react-icons/io";
import { AiOutlineTeam, AiOutlineMenu } from "react-icons/ai";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaCalendarAlt } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { IoDiamond } from "react-icons/io5";
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineBehance } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function Siderbar() {
  return (
    <div className='p-3 mb-5'>
      <a className="btn heart" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="main-nav">
        <div className='color'><AiOutlineMenu size="30" /></div>
      </a>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title d-flex" id="offcanvasExampleLabel">
            <div className='code'><h4>Codding</h4></div>
            <div className='add ms-2'><h4>Addict</h4></div></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className=' offcanvas-body ms-2' id="main-nav">
          <div className='d-flex letters mb-4'><IoIosHome size="20" /><div className='letter ms-3'>Home</div></div>
          <div className='d-flex letters mb-4'><AiOutlineTeam size="20" /><div className='letter ms-3'>Team</div></div>
          <div className='d-flex letters mb-4'><VscFileSubmodule size="20" /><div className='letter ms-3'>Projects</div></div>
          <div className='d-flex letters mb-4'><FaCalendarAlt size="20" /><div className='letter ms-3'>Calender</div></div>
          <div className='d-flex letters'><TiDocumentText size="20" /><div className="letter ms-3">Documents</div></div>
        </div>
        <div className='d-flex icons mb-4'>
          <div className='fb ms-2 '><BsFacebook size='20' /></div>
          <div className='tw ms-2'><AiOutlineTwitter size='20' /></div>
          <div className='li ms-2'><AiFillLinkedin size='20' /></div>
          <div className='be ms-2'><AiOutlineBehance size='20' /></div>
          <div className='di ms-2'><IoDiamond size='20' /></div></div>
      </div>
      <button type="button" class="btn btn-dark position-absolute top-50 start-50" data-bs-toggle="modal" 
      data-bs-target="#exampleModal">SHOW MODAL</button>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body text-center">Modal Content</div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Siderbar