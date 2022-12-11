import { CoinsType } from './App';

const CoinTable = ({ coins }: { coins: CoinsType[] }) => {
	return (
		<div className="coin-table">
			<table>
				<thead>
					<tr>
						<th className="headCol rankCol">순위</th>
						<th className="headCol nameCol">종목</th>
						<th>기호</th>
						<th>가격(KRW)</th>
						<th>총 시가</th>
						<th>거래량(24H)</th>
						<th>변동(24H)</th>
						<th>변동(7D)</th>
					</tr>
				</thead>
				<tbody>
					{coins.map((coin: CoinsType) => (
						<tr key={coin.id}>
							<td className="headCol rankCol align-right">
								{coin.rank}
							</td>
							<td className="headCol nameCol">{coin.name}</td>
							<td>{coin.symbol}</td>
							<td className="align-right">
								₩
								{Number(
									coin.quotes.KRW.price.toFixed(1)
								).toLocaleString()}
							</td>
							<td className="align-right">
								{(
									coin.quotes.KRW.market_cap / 1000000000000
								).toFixed(2)}
								T
							</td>
							<td className="align-right">
								{(
									coin.quotes.KRW.volume_24h / 1000000000000
								).toFixed(2)}
								T
							</td>
							<td className="align-right">
								{coin.quotes.KRW.percent_change_24h.toFixed(2)}%
							</td>
							<td className="align-right">
								{coin.quotes.KRW.percent_change_7d.toFixed(2)}%
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default CoinTable