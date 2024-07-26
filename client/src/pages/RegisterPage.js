import React from "react";

const RegisterPage = () => {
    return(
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4'>
            <h3>회원가입 페이지</h3>
            <form>
                <div>
                    <label>성명 :</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='성명을 입력하시오'
                        className=''
                        required
                    />
                </div>
                <div>
                    <label>카카오계정 :</label>
                    <input
                        type='text'
                        id='email'
                        placeholder='카카오계정을 입력하시오'
                        className=''
                        required
                    />
                </div>
                <div>
                    <label>비밀번호 :</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='비밀번호를 입력하시오'
                        className='bg-slate-100 px-2 py-1 focus:outline-primary'
                        required
                    />
                </div>
                <button className='bg-primary text-lg px-4 hover:bg-secondary mt-2 font-bold text-white leading-relaxed tracking-wide'>
                    가입하기
                </button>

            </form>
            </div>
        </div>
    )
}

export default RegisterPage