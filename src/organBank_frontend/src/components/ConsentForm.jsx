import React from 'react'
import { organBank_backend } from 'declarations/organBank_backend'

function ConsentForm() {

    async function postConsent(e) {
        let { name, age, bloodGroup } = e.target.name.value

        e.preventDefault()
    }
    return (
        <div id='consentForm' className='my-40'>
            <h1 className='mx-auto w-max text-5xl font-bold mb-10'>Donate Now</h1>
            <form onSubmit={postConsent} className='flex flex-col border justify-center items-center py-20'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input name='name' type="text" className='border ml-5' />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input name='age' type="text" className='border ml-5' />
                </div>
                <div>
                    <label htmlFor="bloodGroup">BloodGroup:</label>
                    <input name='bloodGroup' type="text" className='border ml-5' />
                </div>
                <button type='submit' className='w-40 py-2 text-white bg-gray-500 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}

export default ConsentForm