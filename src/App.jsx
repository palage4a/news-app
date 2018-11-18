import React from 'react';

import News from './components/News'

import './App.css'  

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      records: this.props.props,
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.hideRecord = this.hideRecord.bind(this)
    this.deleteRecordByID = this.deleteRecordByID.bind(this)
    this.displayRecords = this.displayRecords.bind(this)

  }
  hideRecord = id => {
    this.setState({
      records:this.deleteRecordByID(id)
    })
  }
  
  deleteRecordByID = id => this.state.records.filter((record) => record.id !== id)



  handleSearch = event => {
    if(event.target.value)
    {
      this.setState({
        displayedPost:this.state.records.filter( (record) => record.title.includes(event.target.value.toLowerCase())||record.body.includes(event.target.value.toLowerCase()))
      })
    }
    else this.setState({displayedPost: null})
  }

  displayRecords = () => {
    return (this.state.displayedPost||this.state.records)
  }

  render () {
    console.log('disp')
    console.log(this.displayRecords())
    console.log('record')
    console.log(this.state.records)
    return (
      <div className='container'>
        <h1>Заголовок</h1>
        <input type="text" placholder="Поиск по записям" onChange={this.handleSearch}/>
        <News records={this.displayRecords()} deletePost={this.hideRecord} />
      </div>
    )
  }
}



