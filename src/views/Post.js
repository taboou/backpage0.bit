import React from 'react'
 
import { observer } from 'mobx-react'

@observer
export default class Post extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        /* Retrieve the boolean for disclaimer agreement. */
        const { hasAgreedToDisclaimer } = this.store

        /* Process display. */
        if (hasAgreedToDisclaimer)
            return this.newPost()
        else
            return this.disclaimer()
    }

    agree() {
console.log('fired the Post agree')
        this.store.agree()
    }

    disclaimer() {
        return (
            <div class="disclaimerAgreement">
                <h3>Disclaimer</h3>
                
                <div class="disclaimer-scroll-box">
                    <p>
                        This section contains sexual content, including pictorial nudity and adult language. 
                        It is to be accessed only by persons who are 18 years of age or older (and is not considered to be a minor in his/her state of residence) and who live in a community or local jurisdiction where nude pictures and explicit adult materials are not prohibited by law. 
                        By accessing this website, you are representing to us that you meet the above qualifications. 
                        A false representation may be a criminal offense.
                    </p>

                    <p>
                        I confirm and represent that I am 18 years of age or older (and am not considered to be a minor in my state of residence) and that I am not located in a community or local jurisdiction where nude pictures or explicit adult materials are prohibited by any law. 
                        I agree to report any illegal services or activities which violate the Terms of Use. 
                        I also agree to <a href="javascript://">report suspected exploitation of minors and/or human trafficking</a> to the appropriate authorities.
                    </p>
                </div>
                
                <p><b>I have read and agree to this disclaimer as well as the <a href="javascript://">Terms of Use</a>.</b></p>
                <p><a href="javascript://" onClick={ this.agree.bind(this) }>I agree</a></p>
                <p><a href="javascript://">I don't agree</a></p>
            </div>
        )
    }

    newPost() {
        return (
            <div>
                We are good to go now folks!

                <h2>NEW POST</h2>
            </div>            
        )
    }
}