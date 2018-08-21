import { h, render, Component } from 'preact'
import css from './app.css'

class HelloWorld extends Component {
  render() {
    return <h1 class={css.main}>Hello World</h1>
  }
}

render(<HelloWorld />, document.body)
