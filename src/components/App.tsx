import React, { useEffect, useState } from 'react';
import '../App.scss';
import CoinTable from './CoinTable';

export interface CoinsType {
	id: string
	rank: number
	name: string
	symbol: string
	quotes: { 
		KRW: { 
			price: number
			market_cap: number
			volume_24h: number
			percent_change_24h: number
			percent_change_7d: number
		}
	},
}

function App(): JSX.Element {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);

	const refreshPage = ()=>{
		window.location.reload();
	}
	
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
		.then(response => response.json())
		.then(json => {
			setCoins(json.slice(0, 100));
			setLoading(false);
		})
		.catch((error) => {
			console.log(error);
			// 에러 넘버를 확인
			console.log(error.response.status);
		})
	}, [])

	return (
		<div className="App">
			<section className="coin-tracker">
				<img src={require("./ct-logo.png")}/>
				<div className="title flex-grid flex-grid--center">
					<h1>암호화폐 순위 실시간 top 100</h1>
					<div className="btn">
						<button onClick={ refreshPage }>새로고침</button>
					</div>
				</div>
				<div className="result">
				{
					loading
					? <span className="loader">Loading...</span> 
					: (
						<CoinTable coins={ coins }/>
					)
				}
				</div>
			</section>
		</div>
	);
}

export default App;
