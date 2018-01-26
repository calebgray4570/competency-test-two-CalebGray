// 43D 43E 43F 43G 
import axios from 'axios'
const initialState = {
    contactData: {},
    getContactData:[]
}

const ADD_CONTACT = 'ADD_CONTACT'
const GET_CONTACT = 'GET_CONTACT'

export function addContact( contactData ){
    let newContact = axios.post('/addContact', contactData )
        .then ( res => res.data )
        return {
            type: ADD_CONTACT,
            payload: newContact
        }
}

export function getContact(){
    let contactList = axios.get('/getContact')
        .then( res => res.data )
        return {
            type: GET_CONTACT,
            payload: contactList
     } 
}

export default function reducer( state = initialState, action ){
    switch (action.type) {
        case ADD_CONTACT + '_FULFILLED':
            return Object.assign({}, state, { contactData: action.payload} )
        
        case GET_CONTACT + '_FULFILLED':
            return Object.assign({}, state, { getContactData: action.payload} )


        default:
            return state;

    }
}