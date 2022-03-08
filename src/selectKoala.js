import { render } from './render'
export let selectKoala = koala => {
    activeKoala = koala
    render()
}