import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class BlogPost extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            postId: null
        }
    }

    render() {
        return this._displayPost()
    }

    componentDidMount() {
        /* Initialize post id. */
        this._initPostId()
    }

    _initPostId() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the district id as the last argument of the url. */
        const postId = currentUrl.split('/').pop()

        /* Update state. */
        this.setState({ postId })
    }

    _displayPost() {
        /* Initialize post title. */
        let title = null

        /* Initialize post body. */
        let body = null

        /* Initialize post author. */
        let author = null

        /* Initialize post date. */
        let postedAt = null

        switch(this.state.postId) {
            case 'golden-pen':
                title = 'A Golden Pen'
                body = `
                    <div>
                        Welcome Sex Workers,<br>
                        Couple quick questions:
                    </div>

                    <div class="mt-1 ml-4">
                        Do you hate dealing with sweaty, needy, selfish clients all the time?<br>
                    </div>

                    <div class="mt-1 ml-4">
                        Do you enjoy making lots of money?<br>
                    </div>

                    <div class="mt-3">
                        Now you can earn Gold Coins writing &amp; promoting your articles on Backpage Zero
                        <em>, up to $1.00 per word.</em>
                    </div>
                `
                postedAt = 'Jun 01, 2018'
                author = 'Londynn Lee'
                break
            default:
                title = 'Unknown'
                body = '...'
                postedAt = '...'
                author = 'Anonymous'
        }

        /* Allows for "dangerous" html to be inserted. */
        return <div class="container-fluid">
            <h2 dangerouslySetInnerHTML = {{ __html: title }} class="mb-0" />

            <footer class="blockquote-footer mt-0 mb-3 ml-1">
                <small>
                    { postedAt.toUpperCase() }
                    &nbsp;/&nbsp;
                    <NavLink to="/spot/LondynnLee">{ author.toUpperCase() }</NavLink>
                </small>
            </footer>

            <div dangerouslySetInnerHTML = {{ __html: body }} />
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
