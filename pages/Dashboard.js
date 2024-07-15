import SquareChart from "../components/squareChart";


const Dashboard =()=>{
    
    return(
        <div className="bg-neutral-100 ml-5   h-screen">
          <div className="flex ">
             <SquareChart total="Total Sales" month="Sales of the month" today="Sales of today" sTotal={5432} sMonth={1500} sToday={750}/>
             <SquareChart total="Total Users" month="Users of the month" today="Users of today" sTotal={1500} sMonth={200} sToday={15}/>
             <SquareChart total="Profit" month="Sales of the month" today="Sales of today" sTotal={5420} sMonth={1500} sToday={750}/>
             <SquareChart total="Profit" month="Sales of the month" today="Sales of today" sTotal={5420} sMonth={1500} sToday={750} src="./assets/Graph.png"/>
             <SquareChart total="Total Sales" month="Partners" today="Professor" sTotal={3400} sMonth={1500} sToday={1500} src="./assets/Graph.png"/>
          </div>
          <div>
           
            
          </div>
        </div>
    );
};
export default Dashboard;