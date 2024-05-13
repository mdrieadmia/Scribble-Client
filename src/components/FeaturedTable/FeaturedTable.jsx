import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const FeaturedTable = ({ featured }) => {

    const columns = [
        {
            name : 'ID',
            selector : (id, idx)=>idx + 1,
            sortable : true,
            maxWidth : "100px"
        },
        {
            name : 'Blog Title',
            selector : (title)=> title.title,
            sortable : true,
            width : "60%"
        },
        {
            name : 'Author',
            selector : (name)=> name.displayName,
            sortable : true
        },
        {
            name : 'Photo',
            selector : (photo) => <img className='h-10 w-10 border p-[2px] rounded-full' src={photo.photoURL} alt="Image" /> ,
            sortable : true           
        },
        {
            name : 'Actions',
            selector : (id) => <Link to={`http://localhost:5173/blog/details/${id._id}`} className='text-green-500 font-bold'>Details</Link> ,
            sortable : true           
        },
    ]


    return <DataTable columns={columns} data={featured} fixedHeader highlightOnHover/>
};

FeaturedTable.propTypes = {
    featured: PropTypes.object
};

export default FeaturedTable;