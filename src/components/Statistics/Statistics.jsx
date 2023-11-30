import './Statistics.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title.length > 0 &&
                <h2 className="statisticsTitle">{title}</h2>
            }
            <ul className="stat-list">
                {stats.map(({id,label,percentage}) => {
                    return (
                        <li className="stat" key={id}>
                            <span className="itemLabel">{label}</span>
                            <span className="itemPercentage">{percentage}%</span>
                        </li>
                    )  
                })
                }
            </ul>
        </section>
    )
}