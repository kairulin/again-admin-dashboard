import Orders from "./Orders"
function Main() {
    return (
        <div className="main">
            <h1>Dashboard</h1>
            <div className="date">
                <input type="date" />
            </div>

            <div className="dashboard">
                <div className="sales">
                    <span className="material-icons-sharp"> analytics </span>
                    <div className="mid">
                        <div className="left">
                            <h3>
                                Total Sales
                            </h3>
                            <h1>
                                $25,024
                            </h1>
                        </div>
                        <div className="cir">
                            <svg>
                                <circle cx="38" cy="38" r="30" />
                            </svg>
                            <small className="number">
                                81%
                            </small>
                        </div>
                    </div>

                    <small>Last 24Hours</small>
                </div>
                <div className="expenses">
                    <span className="material-icons-sharp"> analytics </span>
                    <div className="mid">
                        <div className="left">
                            <h3>
                                Total Expenses
                            </h3>
                            <h1>
                                $14,160
                            </h1>
                        </div>
                        <div className="cir">
                            <svg>
                                <circle cx="38" cy="38" r="30" />
                            </svg>
                            <small className="number">
                                81%
                            </small>
                        </div>
                    </div>

                    <small>Last 24Hours</small>
                </div>
                <div className="income">
                    <span className="material-icons-sharp"> analytics </span>
                    <div className="mid">
                        <div className="left">
                            <h3>
                                Total Income
                            </h3>
                            <h1>
                                $10,864
                            </h1>
                        </div>
                        <div className="cir">
                            <svg>
                                <circle cx="38" cy="38" r="30" />
                            </svg>
                            <small className="number">
                                81%
                            </small>
                        </div>

                    </div>

                    <small>Last 24Hours</small>
                </div>
            </div>

            <Orders/>
        </div>
    )
}

export default Main