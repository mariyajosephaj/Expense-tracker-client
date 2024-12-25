// import commonAPI from "./commonAPI";
// import SERVER_BASE_URL from "./serverUrl";

// register api

// export const registerAPI = async(reqBody)=>{
//     await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
// }

// login


import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// register API

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// login

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

 // add transaction
export const addTransactionAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-transaction`,reqBody,reqHeader)
}
// get categories
export const getCategoriesAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/get-categories`,{})
}

// GET USER transaction
export const userTransactionAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-transactions`,{},reqHeader)
}
// edit transaction
export const updateTransactionAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/transactions/${id}/edit`,reqBody,reqHeader)
}

// delete transaction
export const deleteTransactionAPI = async(id,reqHeader) =>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/transactions/${id}/remove`,{},reqHeader)
}