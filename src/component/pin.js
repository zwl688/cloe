import React, { Component } from 'react';
import axios from 'axios'
import qs from 'qs'
export class pin extends Component {
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
  render() {
    return (
      <div className="App">
       	<input type='text' ref='iput'/>
       	<button onClick={()=>{this.btn()}}>发送</button>
       	<ul>
       		{
       			this.state.list.map((item,index)=>{
       				return <li key={index}>{item.content}</li>
       			})
       		}
       	</ul>
      </div>
    );
  }
  componentDidMount(){
  	var id=this.props.match.params.id
  	axios.get(`http://guoxiao158.top/joke/getpl.php?id=${id}`).then((res)=>{
  		this.setState({
  			list:res.data.dataList
  		})
  		console.log(res)
  	})
  }
  btn(){
  	var vals=this.refs.iput.value
  	var id=this.props.match.params.id
	axios.post('http://guoxiao158.top/joke/addpl.php',qs.stringify({
		uid:id ,
		pinglun:vals
	})).then((res)=>{
		console.log(res)
		axios.get(`http://guoxiao158.top/joke/getpl.php?id=${id}`).then((res)=>{
  		this.setState({
  			list:res.data.dataList
  		})
  		console.log(res)
  	})
	})
	this.refs.iput.value=''
  	alert('请求成功')
  
  }
  
}
