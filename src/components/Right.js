import profilePhoto from "../images/profile-1.jpg"
import profilePhoto2 from "../images/profile-2.jpg"
import profilePhoto3 from "../images/profile-3.jpg"
import profilePhoto4 from "../images/profile-4.jpg"


function Right({openSidebar}) {


    const toggler = (() => {
        const darkToggler = document.querySelector(".toggler")
        document.body.classList.toggle('dark-theme-variables')
        darkToggler.querySelector('span:nth-child(1)').classList.toggle('active')
        darkToggler.querySelector('span:nth-child(2)').classList.toggle('active')
    })

   

    return (
        <div className="right">
            <div className="top">
                <div className="btn" onClick={openSidebar}>
                    <span className="material-icons-sharp">menu</span>
                </div>
                <div className="toggler" onClick={toggler}>
                    <span className="material-icons-sharp left active">light_mode</span>
                    <span className="material-icons-sharp right">dark_mode</span>
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Hi,<b>Lin</b></p>
                        <small>Admin</small>
                    </div>
                    <div className="image">
                        <img src={profilePhoto} alt=""></img>
                    </div>

                </div>
            </div>
            <div className="updates">
                <h3>Recent Updates</h3>
                <div className="all-info">
                    <div className="info">
                        <img src={profilePhoto2} alt="" />
                        <div className="text">
                            <p><b>Mike Tyson</b> received his order of Night lion tech Gps drone.</p>
                            <small>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="info">
                        <img src={profilePhoto3} alt="" />
                        <div className="text">
                            <p><b>Mike Tyson</b> received his order of Night lion tech Gps drone.</p>
                            <small>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="info">
                        <img src={profilePhoto4} alt="" />
                        <div className="text">
                            <p><b>Mike Tyson</b> received his order of Night lion tech Gps drone.</p>
                            <small>2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics">
                <h3>Sales Analytics</h3>
                <div className="sales">
                    <div className="list">
                        <span className="material-icons-sharp">shopping_cart</span>
                        <div className="text">
                            <p>ONLINE ORDERS</p>
                            <small>Last 24 Hours</small>
                        </div>
                        <p className="green">+39%</p>
                        <p>3849</p>
                    </div>
                    <div className="list">
                        <span className="material-icons-sharp">local_mall</span>
                        <div className="text">
                            <p>OFFLINE ORDERS</p>
                            <small>Last 24 Hours</small>
                        </div>
                        <p className="red">-17%</p>
                        <p>1100</p>
                    </div>
                    <div className="list">
                        <span className="material-icons-sharp">person</span>
                        <div className="text">
                            <p>NEW CUSTOMERS</p>
                            <small>Last 24 Hours</small>
                        </div>
                        <p className="green">+25%</p>
                        <p>849</p>
                    </div>
                    <div className="product">
                        <span className="material-icons-sharp">add</span>
                        <p>Add Product</p>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Right