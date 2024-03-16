


function TrendAvatar(pois){
    return (
        <div className="trend-avatar">

       <img src={pois.tava.Times} />
       <img src={pois.tava.Cnn} />
       <img src={pois.tava.Twitter} />
        </div>
    )
   }
   
   export default TrendAvatar;