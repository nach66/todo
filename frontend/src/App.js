import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import uuid from 'uuid'
import { addItemPsql, deleteItemPsql, updateItemPsql, deleteAllPsql} from './actionPsql'
import { addItem, deleteItem, updateItem, deleteAll} from './actionMdb'
import axios from 'axios'

const psqlUrl = 'http://localhost:5000/postgresql-items' //url to postgresql
const mdbUrl = 'http://localhost:5000/items' //url to mongobd

class App extends Component {
  state = {
    items: [],
    _id: "",
    title: "",
    done: false,
    editItem: false,
    psqlFell: false,
    mongoFell: false
  }

  componentDidMount () {
    this.fetchFromDB()
  }

  //fetch data from postgresql
  fetchFromDB = async () => {
    try {

      if (this.state.psqlFell)
        this.fetchFromBackUp()
      else
        console.log("fetch data from psql")
      
      const response = await fetch(psqlUrl)
      const jsonData = await response.json()

      jsonData.status === 200 ? 
      (this.setState({
        items: jsonData.items,
        editItem: false,
        done: false,
        title:"",
        _id: uuid()
      }))
      : this.fetchFromBackUp()

    } catch (error) {
      console.log('psql DB is fails!!! :(')
      this.fetchFromBackUp()
    }
  }

  //in case psql fell, fetch data from mongoDb
  //if mongo have some problem too, let the customer know that there is a problem, and he should check with expert
  //if mongo cannot fetch data at all, its the end of the world. let the costumer know.
  fetchFromBackUp = async () => {
    try {

      if (this.state.mongoFell)
        alert("warning! Since PostgreSQL fell, we use MongoDB. Unfortunately, there was an error in Mongo too, so the information may not be up to date. Please call a human!!!");
      else
        console.log("could it be that psql failed? we will use mongo now...");
      
      const res = await axios.get(mdbUrl);

      res.data.status === 200 ? 
      (this.setState({
        items: res.data.items,
        editItem: false,
        done: false,
        title:"",
        _id: uuid()
      })) :
      alert('oh no! both DB failed!!!')
    } catch (error) {
      alert('both DB failed!!! :O call a human')
    }
  }

  //handle change at input field
  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  //handle done and undone
  handleDone = id => {
    const selectedItem = this.state.items.find(item => item._id === id)
    selectedItem.done =  !selectedItem.done
    this.update(selectedItem)
  }

  handleEdit = id => {
    const selectedItem = this.state.items.find(item => item._id === id)
    this.setState({
      title: selectedItem.title,
      done: selectedItem.done,
      _id: selectedItem._id,
      editItem: true
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      title: this.state.title,      
      done: this.state.done,
      _id: this.state._id,
    }
    this.state.editItem? this.update(newItem) : this.add(newItem)
  }

  //hadle add in both db
  add = async (item) => {
    await addItemPsql(item).then(({ status }) => {
      if (status !== 200) {throw new Error()}
      }).catch(() => {
        console.log('Error! item not saved at psql')
        this.setState({psqlFell: true})
      })

    await addItem(item).then(({ status }) => {
        if (status !== 200) {throw new Error()}
      }).catch(() => {
        console.log('Error! item not saved at mdb')
        this.setState({mongoFell: true})
      })

    this.fetchFromDB()
  }

  //hadle update in both db
  update = async (item) => {
    await updateItemPsql(item).then(({ status }) => {
      
      if (status !== 200) {throw new Error()}
    }).catch(() => {
      console.log('Error! item not updated at psql')
      this.setState({psqlFell: true})
    })

    await updateItem(item).then(({ status }) => {
      if (status !== 200) {
        throw new Error()}
      }).catch(() => {
        console.log('Error! item not updated at mdb')
        this.setState({mongoFell: true})
      })

    this.fetchFromDB()
  }

  //hadle delete in both db
  handleDelete = async (id) => {
    await deleteItemPsql(id).then(({ status }) => {
      console.log('del')
      if (status !== 200) {throw new Error()}
    }).catch(() => {
        console.log('Error! item not deleted at psql')
        this.setState({psqlFell: true})
    })

    await deleteItem(id).then(({ status, data }) => {
      if (status !== 200) {throw new Error()}
    }).catch(() => {
        console.log('Error! item not deleted at mdb')
        this.setState({mongoFell: true})
    })
    
    this.fetchFromDB()
  }

  //clear list in both db
  clearList = async () => {
    await deleteAllPsql().then(({ status }) => {
      if (status !== 200) {throw new Error()}
    }).catch(() => {
      console.log('Error! all items not deleted at psql')
      this.setState({psqlFell: true})
    })

    await deleteAll().then(({ status }) => {
      if (status !== 200) {throw new Error()}
      }).catch(() => {
        console.log('Error! all items not deleted at mdb')
        this.setState({mongoFell: true})
    })
    
    this.fetchFromDB()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.title}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleDone={this.handleDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App
