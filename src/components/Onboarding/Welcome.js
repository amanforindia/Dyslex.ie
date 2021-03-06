import React from 'react'
import ReaderView from '../Tools/ReaderView'
import { Bottom, Container, Top } from '../DyslexiBalance'
import cx from '../styles'

export default class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Top>
          <h1>Welcome to Dyslex.ie</h1>
        </Top>
        <Bottom>
          <p>
            Dyslex.ie can help you read articles faster and more comfortably.
          </p>
          <p>
            To get started, let's go through a short questionnaire so that we
            can help you the best.
          </p>
          <div
            className={`btn btn-primary ${cx('btn')} ${cx('btn-primary')}`}
            onClick={this.props.respond}
          >
            Start
          </div>
        </Bottom>
      </Container>
    )
  }
}
