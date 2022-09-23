import React from 'react';
import List from './List';

const ListContainer = ({list=[]}) => {
    // if(list.length===0){
    //     return </div>
    // }
    let reverseList = list.reverse();
    return (
        <section className="discussion__wrapper">
            <p>질문 List</p>
            <ul className="discussions__container">
               {
                reverseList.map(({id,createdAt,updatedAt,title,url,author,answer,bodyHTML,avatarUrl}) => {
                    return(
                        <List
                        key = {id}
                        createdAt ={createdAt}
                        updatedAt={updatedAt}
                        title={title}
                        url={url}
                        author={author}
                        answer={answer}
                        bodyHTML={bodyHTML}
                        avatarUrl={avatarUrl}
                    />)
                })
               }
            </ul>
            <div className="pagination-block">
                <span className="pageButton outline-none" id="button_prev">Prev</span>
                <span id="page_number" className="outline-none"></span>
                <span className="pageButton outline-none" id="button_next">Next</span>
            </div>
        </section>
    );
};

export default ListContainer;