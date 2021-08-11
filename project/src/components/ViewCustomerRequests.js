import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { baseUrl } from '../config'

function ViewCustomerRequests() {

    const user = useSelector(state => state.user)

    useEffect(() => {
        axios.post(baseUrl+"get-service-requests",{vendor_id:user._id}).then((res)=>{
            alert(JSON.stringify(res.data));
        })
    }, [])

    return (
        <> 

         </>
    )
}

export default ViewCustomerRequests
