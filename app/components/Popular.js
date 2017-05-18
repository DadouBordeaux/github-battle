import React from 'react'

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


export class Popular extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        selectedLanguage: 'All'
      };
      this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
      this.setState({
        selectedLanguage: lang
      })
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


