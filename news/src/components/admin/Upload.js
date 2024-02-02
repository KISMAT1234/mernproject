import AdminAside from "./AdminAside";
import AdminHeader from "./AdminHeader";
function Uploadcontent (){
    return (
       <>
       <AdminHeader/>
       <AdminAside/>
          <div className=" rounded bg-blue-400 h-[80vh] pl-[1%] pt-2 md:pl-1 w-[90%] md:w-[70%] ml-6  flex sm:justify-around md:absolute mt-2 md:ml-80">
           <div>
               <h1 className="text-3xl">UPLOAD YOUR POST HERE</h1>
               <form>
                 <input type="file" className="w-[%] mt-3"/>
                 <h1 className="mt-3 text-2xl">description</h1>
                 <input type="text" className=""/>
                 <h1 className="mt-3 text-2xl"> location:</h1>
                 <input type="text"/><br></br>
                 <h1 className="mt-3 text-2xl">deadline</h1>
                 <input type="date"/>
                 <option class="text-2xl mt-3">Category:
                   <select>
                       <option value ='music'>Kitchen</option>
                       <option value ='music'>Clothes</option>
                       <option value ='music'>Shoes</option>
                       <option value ='music'>Accessories</option>
                       <option value ='music'>Garden</option>
                       <option value ='music'>Room</option>
                   </select>
                 </option>
                 <button className="bg-green-700 text-2xl rounded w-[20%] h-[5vh]">Post</button>
               </form>
           </div>
           <div className="mt-[100px]">
           {/* <img src={image} classsName=""  alt="" /> */}
           </div>
   
          </div>
       </>
    )
   }
   export default Uploadcontent;