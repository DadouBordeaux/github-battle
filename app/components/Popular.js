import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

function SelectLanguage(props) {
  let languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];
  return (
      <ul className="languages">
        {languages.map(function(lang) {
          return (
            <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export class Popular extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        selectedLanguage: 'All',
        repos: null
      };
      this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
      this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang) {
      this.setState({
        selectedLanguage: lang
      })
      api.fetchPopularRepos(lang)
        .then(function(repos) {
          this.setState(function () {
            return {
              repos: repos
            }
          })
        }.bind(this))
    }

    render() {
      return (
          <div>
            <SelectLanguage
              selectedLanguage={this.state.selectedLanguage}
              onSelect={this.updateLanguage}
              />
          </div>
      )
    }
  }
