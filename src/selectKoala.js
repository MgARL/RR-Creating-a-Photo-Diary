import { render } from './render'

export let activeKoala = null

export let selectKoala = koala => {
    activeKoala = koala
    render()
}

