module.exports = {

    addContact: (req, res, next ) => {
        
        const dbInstance = req.app.get('db')
        let { name, email } = req.body
        // console.log('req.nody', req.body)
        dbInstance.add_contact(name, email )
            .then( response => res.status(200).send( response ))
    },

    getContact: (req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_contact()
            .then(( response ) => res.status(200).send( response ))
    },

    getSingleContact: ( req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_single_contact([req.params.contactName])
         .then(( response ) => res.status(200).send( response ))
    },

    editContact: ( req, res, next) => {
        console.log("edit", req.params.contactName)
        const dbInstance = req.app.get('db')
        let { name, email} = req.body
        
        dbInstance.edit_contact([ req.params.contactName, name , email ])
            .then(( response ) => res.status(200).send( response ))
    }, 

    deleteContact:( req, res, next ) => {
        console.log("delete",req.params.contactName )
        const dbInstance = req.app.get('db')
        dbInstance.delete_contact([ req.params.contactName])
            .then((response) => {
                res.status(200).send( response ) 
        })
    }
}