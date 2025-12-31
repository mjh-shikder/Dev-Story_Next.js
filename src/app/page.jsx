import Banner from "../components/Banner";
import Image from "next/image";
import axios from "axios";

export default function Home() {

  // [product, setProduct] = useState([])
  
  // useEffect(() => {
  //   axios.get(
  //     "[https://a-10-backend-paw-mart-web-app.vercel.app/listing](https://a-10-backend-paw-mart-web-app.vercel.app/listing)"
  //   ).then(result => {
      
  //   })
  // },[])

  return (
    <div>
      <h2 className="text-4xl ">Welcome to Dev-Story 🦈 </h2>
      <Banner></Banner>
      <h1 className="bg-linear-60 from-sky-50 to-sky-200 p-3 rounded text-gray-700 text-center font-bold text-2xl my-5 ">
        Product
      </h1>
      <div>

      </div>
    </div>
  );
}
