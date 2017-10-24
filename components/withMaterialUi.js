import {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const withMaterialUi = function (BaseComponent) {
  return class MaterialUiWrapper extends Component {
    static async getInitialProps ({req}) {
      // navigator.userAgent is required by material ui library
      // See http://www.material-ui.com/#/get-started/server-rendering
      if (req) {
        global.navigator = { userAgent: req.headers['user-agent'] || 'all' }
      }

      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps()
      } else {
        return {}
      }
    }

    render () {
      return (
        <MuiThemeProvider>
          <BaseComponent />
        </MuiThemeProvider>
      )
    }
  }
}

export default withMaterialUi
