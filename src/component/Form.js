import React, { useState } from 'react';

const Form = ({addAgora}) => {
    const[inputs,setInputs]=useState({
        name:'',
        author:'',
        createdAt:Date(),
        title:'',
        bodyHTML:''
    });

    const onChange=(e)=>{
        const{value,name}=e.target;//e.target에서 name,value를 추출한다.

        setInputs({
            ...inputs,//기존의 input 객체를 복사한 후
            [name]:value//name 키를 가진 값을 value로 설정한다.
        });

        console.log(inputs)
   };

   const onSubmit=()=>{
    addAgora(inputs)
    console.log(inputs)
   }
    return (
        <section className="form__container">
            <form action="" method="get" className="form">
                <div className="form__input--wrapper">
                <div className="form__input--name">
                    <label for="name">Name </label>
                    <input onChange={onChange} type="text" name="name" id="name" required/>
                </div>
                <div className="form__input--title">
                    <label for="name">Title </label>
                    <input onChange={onChange} type="text" name="name" id="name" required/>
                </div>
                <div className="form__textbox">
                    <label for="story">Question </label>
                    <textarea onChange={onChange} id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
                </div>
                </div>
                <div className="form__submit">
                <input onSubmit={onSubmit} type="submit" value="submit"/>
                </div>
            </form>
        </section>
    );
};

export default Form;