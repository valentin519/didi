import React from 'react';

class Devis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plafond: {
				peinture: 34,
				enduit: 34,
				carrelage: 40,
			},
			sol: {
				peinture: 35,
				enduit: 24,
				carrelage: 23,
			},
			mur: {
				peinture: 25,
				enduit: 23,
				carrelage: 43,
			},
			total: 0,
            surfacetype: '',
            tasktype: '',
			surface: 0,
		};
		this.handleChangeSurfaceType = this.handleChangeSurfaceType.bind(this);
        this.onChangeSurfaceType = this.onChangeSurfaceType.bind(this);
        this.onChangeSurface = this.onChangeSurface.bind(this);
        this.handleChangeTaskType = this.handleChangeTaskType.bind(this);
		this.onChangeTaskType = this.onChangeTaskType.bind(this);
        this.addToCount=this.addToCount.bind(this);
        this.createTask=this.createTask.bind(this);
        this.resetTotal=this.resetTotal.bind(this);
	}
	resetTotal(){
        this.setState({total : 0})
    }
	handleChangeSurfaceType(event) {
		if (event.target.value !== '') {
			this.setState({ surfacetype: event.target.value });
		}
    }
    handleChangeTaskType(event) {
		if (event.target.value !== '') {
			this.setState({ tasktype: event.target.value });
		}
	}
	addToCount(){
        if(this.state.surfacetype === ''){
            return(
                alert('Veuillez indiqué un type de surface')
            )
        }if(this.state.tasktype === ''){
            return(
                alert('Veuillez indiqué une tache')
            )
        }if(this.state.surface === 0){
            return(
                alert('Veuillez indiqué une surface')
            )
        }
        let typeSurface = this.state.surfacetype;
		let task = this.state.tasktype;
        let  totalPrice= this.state[typeSurface][task] * this.state.surface
        this.setState({total : this.state.total + totalPrice  })
        
    }
	createTask(){
        this.setState({
            task :{
                 type : this.state.surfacetype,
                 task : this.state.tasktype,
                 surfaceUser : this.state.surface
            }
        })
    }
	onChangeSurfaceType(e) {
		if (e.target.value.match(/^[0-9]*$/g)) {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}
    }
    onChangeTaskType(e) {
		if (e.target.value.match(/^[0-9]*$/g)) {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}
    }
    onChangeSurface(e) {
        if (e.target.value.match(/^[0-9]*$/g)) {
			this.setState({
				[e.target.name]: Number(e.target.value),
			});
        }
	}
	render() {
		return (
			<div className ='devisCalculator'>
				<select
					onChange={this.handleChangeSurfaceType}>
					<option
						value=''
						disabled={this.state.surfacetype === '' ? false : true}>
						Choisissez une option
					</option>
					<option value='plafond'>Plafond</option>
					<option value='mur'>Mur</option>
					<option value='sol'>Sol</option>
				</select>
                <select
					onChange={this.handleChangeTaskType}>
					<option
						value=''
						disabled={this.state.tasktype === '' ? false : true}>
						Choisissez une option
					</option>
					<option value='peinture'>Peinture</option>
					<option value='enduit'>Enduit</option>
					<option value='carrelage'>Carrelage</option>
				</select>
				<input
					placeholder='Surface en m²'
					type='text'
					id='surface'
					name='surface'
					onChange={this.onChangeSurface}
					value={this.state.surface}
				/>

				<button onClick={this.addToCount} >Ajouter aux taches</button>
                <button onClick={this.resetTotal}>Reset</button>
                <p>{this.state.total}</p>
                <p>{this.state.task}</p>
			</div>
		);
	}
}
export default Devis;
