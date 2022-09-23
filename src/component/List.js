import React, { useState } from 'react';

const List = ({id,createdAt,updatedAt,title,url,author,answer,bodyHTML,avatarUrl}) => {
    const [listOpen, setListOpen] = useState(false)
    // const OpenList = (e) =>{
    //     const ulClick = document.querySelector('.discussions__container')
    //     const answered = document.querySelector('.discussion_question')
    //     ulClick.addEventListener("click",(e)=>{
    //     e.preventDefault()
    //     // e.stopPropagation
    //     //이벤트 전파 방지 반복문
    //     let elem = e.target;
    //         while (!elem.classList.contains('discussion_wrap')) {
    //         elem =  elem.parentNode;

    //         if(elem.nodeName === 'BODY'){
    //             elem = null;
    //             return;
    //         }
    //         }
    //         // console.log(e.target)
    //         // console.log(elem)
    //     elem.nextElementSibling.classList.toggle('open')
    //     elem.childNodes[2].classList.toggle('rotate')
    //     })
    //     //JSX문으로 바꾸려면 어떻게 해야할까..
    //     //왜두번ㄱ클릭해야 열리고 닫힐까
    // }

    const OpenList = (e) =>{
        setListOpen(listOpen=>!listOpen)
    }
    return (
        <li onClick={OpenList} className="discussion__container">
            <div className="discussion_wrap">
                <div className="discussion__avatar--wrapper">
                    <img className="discussion__avatar--image" src={avatarUrl} alt={`avatar of ${author}`}/>
                </div>
                <div className="discussion__content">
                    <h2 className="discussion__title">{title}</h2>
                    <div className="discussion__information">{author} / {createdAt} </div>
                </div>
                <div className="discussion__answered">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            <div className= {"discussion_question" + (listOpen? " open" :  '')}>
                <div>
                    <p className="Answer_p">문제본문</p>
                    {bodyHTML}
                </div>
            </div>
        </li>
    );
};

export default List;