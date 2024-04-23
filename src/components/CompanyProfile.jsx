import './CompanyProfile.modular.css';
import ProductList from './productList';

const CompanyProfile = ()=>{
    return <div className="container">
        <h2>COMPANY PROFILE</h2>

        <div className="profile">
            <img src="img/Director.jpg" alt="director" className='directorImg'/>
            <div className="profile-text">
                <h3>Let's Talk about <span className='custom-color'>MKD </span></h3>
                <p>MKD Furniture is a leading manufacturer of high-quality School Furniture, dedicated to helping individuals for goodlooking and quaity Lifestyle. Our range of products includes School Furniture, Classroom Furniture, Classroom Desk, Play School Furniture, Library Furniture, Computer Lab Furniture, College Furniture, Lab Stool, Staff Room Furniture, Office Furniture, Green board, White board, Pin board, Waiting Chair, Lab Furniture, Hostel Furniture, Filling Cabinet, Writing Arm Chair, School Desk, Conference Room Table, Reception Counter, Primary School Furniture, Restaurant Furniture, Kindergarten Furniture</p>

                <p>Late. Shri. Maya kishore Dubey(MKD) is the founder of that organization. We are Manufacturers, Suppliers and Traders of School and College Furniture, Computer Lab Furnitures, Reception Furniture, Conference Room Furniture, Library Furniture, Auditorium Chairs etc. He has around 40 years. experience in administration & public dealing in central government department. We under take all kind of furniture under one window that addresses to all your needs when its comes to innovative quality Institutional furniture & resources that encompass in office setting & interior. Most of the furniture manufacture Institution does not take enough concern for furniture used in their oganization which student and school staff spend maximum time utilizing. MKD has been manufacturing superior quality furniture as per recommendation of BIS (Bureau of Indian Standard)IS-4837 with latest technologies advance scientific methods in various design. </p>
            </div>
        </div>

        <div className="profileProduct">
            <h3 className='product-heading'>Our Products</h3>
            <ProductList></ProductList>
        </div>
    </div>
}

export default CompanyProfile;