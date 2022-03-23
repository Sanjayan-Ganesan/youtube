const navbar = () => {
    return `    <div id="navbar"> 
    <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" style="width: 100px;height: 50px;" onclick= "window.location.href='index.html';">


    <input type="text" style="width: 400px;height: 20px;margin-top: 1%;margin-left: 30%" id="name">
    <button class="btn" style="height: 27px;margin-top: 1%;width: 40px;" onclick="getdata()"><i class="fa fa-search"></i></button>
</div>`
}

export default navbar;