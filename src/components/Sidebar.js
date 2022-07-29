import logo from "../images/logo.png"

function Sidebar({sidebar,closeSidebar}) {

    return (
        <div className={sidebar? "aside aside--open" : "aside"}>

            <div className="top">  
                    <img src={logo} alt=""></img>
                    <h2>EGA<span>TOR</span></h2>       
                    <span className="material-icons-sharp" onClick={closeSidebar}> close </span>
            </div>

            <div className="sidebar">
                <div>
                    <span className="material-icons-sharp"> grid_view </span>
                    <h3>Dashboard</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> person_outline </span>
                    <h3>Customer</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> receipt_long </span>
                    <h3>Orders</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> insights </span>
                    <h3>Analytics</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> mail_outline </span>
                    <h3>Messages</h3>
                    <span className="message-count">20</span>
                </div>
                <div>
                    <span className="material-icons-sharp"> inventory </span>
                    <h3>Products</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> report_gmailerrorred </span>
                    <h3>Reports</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> settings </span>
                    <h3>Setting</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> add </span>
                    <h3>Add Product</h3>
                </div>
                <div>
                    <span className="material-icons-sharp"> logout </span>
                    <h3>Logout</h3>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
