import { useState } from 'react'

export default function App() {
	const [bill, setBill] = useState('')
	const [percentage1, setPercentage1] = useState(0)
	const [percentage2, setPercentage2] = useState(0)

	const tip = bill * ((percentage1 + percentage2) / 2 / 100)
	console.log(tip)

	function setBillInput(value) {
		setBill(+value)
	}

	function reset() {
		setBill('')
		setPercentage1(0)
		setPercentage2(0)
	}

	return (
		<div className='app'>
			<BillInput bill={bill} onChangeBill={setBillInput} />
			<SelectPercentage question='How did you like the service?' setPercentage={setPercentage1} />
			<SelectPercentage question='How did your friend like the service?' setPercentage={setPercentage2} />
			<Message bill={bill} tip={tip} />
			<Reset bill={bill} onHandleClick={reset} />
		</div>
	)
}

function BillInput({ bill, onChangeBill }) {
	return (
		<div>
			<span>How much was the bill? </span>
			<input
				type='number'
				min={0}
				placeholder='Bill value'
				value={bill}
				onChange={e => onChangeBill(e.target.value)}></input>
		</div>
	)
}

function SelectPercentage({ question, setPercentage }) {
	return (
		<div>
			<span>{question} </span>
			<select
				onChange={e => {
					setPercentage(+e.target.value)
				}}>
				<option value={0}>Dissatisfied (0%)</option>
				<option value={5}>It was okay (5%)</option>
				<option value={10}>It was good (10%)</option>
				<option value={20}>It was amazing! (20%)</option>
			</select>
		</div>
	)
}

function Message({ bill, tip }) {
	if (bill === '') return
	return (
		<p style={{ fontWeight: 700 }}>
			You pay ${bill + tip} (${bill} + ${tip} tip)
		</p>
	)
}

function Reset({ bill, onHandleClick }) {
	if (bill === '') return
	return <button onClick={onHandleClick}> Reset </button>
}
