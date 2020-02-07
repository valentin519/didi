import React from 'react';

const Contact = () => {
    return(
            <div className='formPage'>
                <form method ='post' enctype = 'text/plain' action ='mailto: valentinjulien93@gmail.com'>
                    <pre  className='form'>
                        <p>Nom</p>
                        <input name = 'Nom' size = '30'/>
                        <p>Prénom</p>
                        <input name = 'Prénom' size = '30'/>
                        <p>Votre Email</p>
                        <input name = 'Email' size = '30'/>
                        <p>Votre téléphone</p>
                        <input name = 'Telephone' size = '30'/>
                        <p>Votre message</p>
                        <textarea name = 'Message' rows='15' cols ='40'/>
                        <input type='submit' value='Envoyer'/>
                    </pre>

                </form>
            </div>
    )
}

export default Contact;